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
	handleChange = e => {
			this.setState({
				[e.target.title]:e.target.value
			});
	}
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		}
	}
	render() {
		return(
			<div className='container'>
				<div className='columns'>
					<div className='column is-6'>
	            <img src="https://cdn.scotch.io/2842/b7yhhuUPSGO1fEkMHD6P_sticks.jpeg"/>
	         </div>
					<div className='column is-6' id='thisId'>
						<div className='field'>
							<label>Name</label>
							<div className='control has-icons-left has-icons-right'>
								<input title='name' type='text' className='input' placeholder='First and Last' onChange={this.handleChange} />
								<span className='icon is-small is-left'>
									<i className='fa fa-user'></i>
								</span>
							</div>
						</div>
							<script src="https://checkout.stripe.com/checkout.js"></script>
							<StripeCheckout name={this.state.name} description={this.props.description} amount={fromUsdToCent(this.props.amount)} token={onToken(this.props.amount, this.props.description)} currency={CURRENCY} stripeKey={STRIPE_PUBLISHABLE}>
								<button className='column is-12 button is-large is-primary'>Buy Now</button>
							</StripeCheckout>
					</div>
					</div>
			</div>
		)
	}
}