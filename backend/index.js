require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const app = express();

app.use(express.json());

app.post('/payment_sheet', async (req, res) => {
    console.log(req.body);

    // Use an existing Customer ID if this is a returning customer.
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
        { customer: customer.id },
        { apiVersion: '2022-11-15' }
    );
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount * 100,
        currency: 'INR',
        customer: customer.id,
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.json({
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
        publishableKey: process.env.STRIPE_PUBLIC_KEY
    });
})

app.listen(3000, () => {
    console.log("server running");
})