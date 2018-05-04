import React, {Component} from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';
const CURRENCY = 'USD';
const fromUsdToCent = amount => amount * 100;
const successPayment = data => {
	alert('Payment Successful');
};
const errorPayment = data => {
	alert('Payment Error');
};
const onToken = (amount, description) => token => axios.post(PAYMENT_SERVER_URL,
{
	description,
	source: token.id,
	currency: CURRENCY,
	amount: fromUsdToCent(amount)
})
.then(successPayment)
.catch(errorPayment);

export class Order extends Component {
	render() {
		return(
			<div className='container'>
				<div className='columns'>
					<div className='column is-6'>
	            <img src={this.props.location.state.image.src} alt={this.props.location.state.image.alt}/>
	         </div>
					<div className='column is-offset-1' id='thisId'>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
							<StripeCheckout description={this.props.location.state.description} amount={fromUsdToCent(this.props.location.state.amount)} token={onToken(this.props.location.state.amount, this.props.location.state.description)} currency={CURRENCY} stripeKey={STRIPE_PUBLISHABLE}>
								<button className='column is-12 button is-large is-primary has-text-centered'>Pay with Card</button>
							</StripeCheckout>
					</div>
					</div>
			</div>
		)
	}
}