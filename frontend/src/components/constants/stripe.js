const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_l5x8QXsrNE6GYcRcKhN8oQa4';

export default STRIPE_PUBLISHABLE;