"use server";

const LINE_PAY_CHANNELID = "2005920701";
const LINE_PAY_SECRET = "45d7697220634f1be78b2e09800e1cb8";
const LINE_PAY_VERSION = "v3";
const LINE_PAY_SITE = "https://sandbox-api-pay.line.me";
const axios = require("axios");
const hmacSHA256 = require("crypto-js/hmac-sha256");
const Base64 = require("crypto-js/enc-base64");
const { v4: uuidv4 } = require("uuid");

const createSignature = (uri, linePayBody, nonce) => {
  const encrypt = `${LINE_PAY_SECRET}/${LINE_PAY_VERSION}${uri}${JSON.stringify(
    linePayBody
  )}${nonce}`;
  const signature = Base64.stringify(hmacSHA256(encrypt, LINE_PAY_SECRET));
  const headers = {
    "Content-Type": "application/json",
    "X-LINE-ChannelId": LINE_PAY_CHANNELID,
    "X-LINE-Authorization-Nonce": nonce,
    "X-LINE-Authorization": signature,
  };
  return headers;
};

const createOrder = async (req, res) => {
  const orderObj = { ...orders, currency: "TWD" };
  const timeStamp = Date.now();
  orderObj.user = req.user._id;
  orderObj.TimeStamp = timeStamp;
  orderObj.MerchantOrderNo = timeStamp;
  orderObj.Amt = orderObj.amount;
  const newOrder = await Order.create(orderObj);
  orderObj.orderId = newOrder._id.toString();
  delete orderObj.user;
  delete orderObj.Amt;
  delete orderObj.MerchantOrderNo;
  delete orderObj.TimeStamp;
  const reqBody = {
    ...orderObj,
    redirectUrls: {
      confirmUrl: config.callback + "/v1/linePay/confirm",
      cancelUrl: config.callback + "/v1/linePay/cancel",
    },
  };
  const uri = "/payments/request";
  const url = `${LINE_PAY_SITE}/${LINE_PAY_VERSION}${uri}`;
  const nonce = uuidv4();
  const headers = createSignature(uri, reqBody, nonce);
  const linePayRes = await axios.post(url, reqBody, { headers });
  if (linePayRes?.data?.returnCode === "0000") {
    return res.redirect(linePayRes.data.info.paymentUrl.web);
  }
  return res.status(400).send({ message: "Failed to create LINE Pay order" });
};

const confirmOrder = async (req, res) => {
  const { transactionId, orderId } = req.query;
  const uri = `/payments/${transactionId}/confirm`;
  const order = await Order.findById(orderId);
  const linePayBody = {
    amount: order.amount,
    currency: "TWD",
  };
  const nonce = uuidv4();
  const headers = createSignature(uri, linePayBody, nonce);
  const url = `${LINE_PAY_SITE}/${LINE_PAY_VERSION}${uri}`;
  const linePayRes = await axios.post(url, linePayBody, { headers });
  if (linePayRes?.data?.returnCode === "0000") {
    return res.redirect(`/checkOrder?id=${orderId}`);
  } else {
    return res.status(400).send({
      message: linePayRes?.data,
    });
  }
};
