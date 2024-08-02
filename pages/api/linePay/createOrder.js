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
  if (req.method === "POST") {
    const { cart } = req.body;

    const calculateTotalAmount = (order) => {
      return order.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };

    const generateOrderId = () => "order-" + new Date().getTime();

    const orderObj = {
      amount: calculateTotalAmount(cart),
      currency: "TWD",
      orderId: generateOrderId(),
      packages: [
        {
          id: "package-1",
          amount: calculateTotalAmount(cart),
          name: "Order Package",
          products: cart.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      ],
      redirectUrls: {
        confirmUrl: "https://coffeeshop-silk.vercel.app/",
        cancelUrl: "https://coffeeshop-silk.vercel.app/order/linePay/cancel",
      },
    };

    const url = `${process.env.LINE_PAY_SITE}/${process.env.LINE_PAY_VERSION}/payments/request`;
    const headers = createSignature(
      "/payments/request",
      orderObj,
      process.env.LINE_PAY_SECRET
    );

    try {
      const linePayRes = await axios.post(url, orderObj, { headers });
      if (linePayRes?.data?.returnCode === "0000") {
        return res.json({ paymentUrl: linePayRes.data.info.paymentUrl.web });
      } else {
        return res.status(400).json({
          message: "Failed to create LINE Pay order",
          detail: linePayRes.data,
        });
      }
    } catch (error) {
      console.error("Error making request to LINE Pay API", error);
      return res.status(500).json({
        message: "Internal Server Error",
        detail: error.message,
      });
    }
  } else {
    return res.status(405).end();
  }
}
