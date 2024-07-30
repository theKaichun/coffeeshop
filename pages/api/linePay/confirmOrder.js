"use server";
import axios from "axios";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";

const createSignature = (uri, body, secretKey) => {
  const nonce = Date.now().toString();
  const encrypt = `${secretKey}/${
    process.env.LINE_PAY_VERSION
  }${uri}${JSON.stringify(body)}${nonce}`;
  const signature = Base64.stringify(hmacSHA256(encrypt, secretKey));
  const headers = {
    "Content-Type": "application/json",
    "X-LINE-ChannelId": process.env.LINE_PAY_CHANNELID,
    "X-LINE-Authorization-Nonce": nonce,
    "X-LINE-Authorization": signature,
  };
  return headers;
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { transactionId, orderId } = req.query;
      const uri = `/payments/${transactionId}/confirm`;

      const order = await findOrderById(orderId);

      const linePayBody = {
        amount: order.amount,
        currency: "TWD",
      };

      const headers = createSignature(
        uri,
        linePayBody,
        process.env.LINE_PAY_SECRET
      );
      const url = `${process.env.LINE_PAY_SITE}/${process.env.LINE_PAY_VERSION}${uri}`;

      const linePayRes = await axios.post(url, linePayBody, { headers });

      if (linePayRes?.data?.returnCode === "0000") {
        res.redirect(`/checkOrder?id=${orderId}`);
      } else {
        res.status(400).json({
          message: "Failed to confirm LINE Pay order",
          detail: linePayRes.data,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  } else {
    return res.status(405).end();
  }
}
