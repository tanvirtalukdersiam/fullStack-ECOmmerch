const express = require("express");
const router = express.Router();

const SSLCommerzPayment = require("sslcommerz-lts");
const orderSchema = require("../../../model/orderSchema");
const store_id = "newor66e6b59830d1e";
const store_passwd = "newor66e6b59830d1e@ssl";
const is_live = false; //true for live, false for sandbox

router.get("/init", async (req, res) => {
  let order = new orderSchema({
    user,
    orderItem,
    price,
    quantity,
  });
  await order.save();
  const data = {
    total_amount: 100,
    currency: "BDT",
    tran_id: Date.now(), // use unique tran_id for each api call
    success_url: " http://localhost:3500/api/v1/payment/success",
    fail_url: " http://localhost:3500/api/v1/payment/fail",
    cancel_url: " http://localhost:3500/api/v1/payment/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    let GatewayPageURL = apiResponse.GatewayPageURL;
    const GatePageURLUid = GatewayPageURL.split("/");
    let id = GatePageURLUid[GatePageURLUid.length - 1];
    res.status(200).send(id);
  });
  router.post("/success", (req, res) => {
    res.send("Payment Successful");
  });
  router.post("/fail", (req, res) => {
    res.send("Payment Failed");
  });
  router.post("/cancel", (req, res) => {
    res.send("Payment Canceled");
  });
});

module.exports = router;
