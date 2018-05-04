const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production' ? 'sk_live_MY_SECRET_KEY' : 'pk_test_l5x8QXsrNE6GYcRcKhN8oQa4';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;