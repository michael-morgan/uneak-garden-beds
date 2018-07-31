const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('');

// Charge the user's card:
exports.charge = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // Token is created using Stripe.js or Checkout!
    // Get the payment token ID submitted by the form:
    const token = request.body.id;
    const amount = Math.floor(+request.body.amount * 100);
    const description = request.body.description;
    const email = request.body.email;

    stripe.charges.create({
      amount,
      currency: 'usd',
      description,
      receipt_email: email,
      source: token,
    }, (err, charge) => {
      response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify({ err, charge, token, email, amount, description }));
    });
  });
});
