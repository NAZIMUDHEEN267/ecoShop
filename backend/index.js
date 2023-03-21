require("dotenv").config();
const express = require("express");
const app = express();
const stripe = require('stripe')("sk_test_51MjghkSEmbFcNWbTUgbeYmXz0Gl8xvMOcbZhrEHUhpbnFPPBdLVXAztvD86aHJ2gjTD5Fzq2FP73kEzlT02j2PyM00u58k4q9C");

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
        publishableKey: "pk_test_51MjghkSEmbFcNWbTjyjRl6qPXCsQ4FmEBlRlyMux77CMrMsaMIK4GVRrlTdyp17mQbGJbtmO6YhHhNK9W99JdYrB00Kw0knkMd"
    });
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server running");
})