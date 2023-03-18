const express = require("express");
const Stripe = require("stripe");
require('dotenv').config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000,
        currency: "usd"
    });

    res.send({
        clientSecret: paymentIntent.client_secret
    })
})

app.listen(3000, () => {
    console.log("backend running");
})
