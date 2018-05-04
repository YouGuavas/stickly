import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Store.css';
const products = {
	0: {
		0: {
			name: "Bundle of Sticks",
			price: 15,
			description: 
			"This bundle of sticks provides  an earthy fragrance and aesthetic natural appeal. \
			Your bundle of sticks will come with a personalized note. \
	    The perfect natural gift for any time of year!",
	    image:{
	    	src:"https://cdn.scotch.io/2842/b7yhhuUPSGO1fEkMHD6P_sticks.jpeg", 
	    	alt: "A bundle of sticks"
	    }
		}, 
		1: {
			name: "Extra Large Bundle of Sticks",
			price: 30,
			description: 
			"This extra large bundle of sticks is perfect for the stick lovers who want to gift something that truly goes above and beyond.\
			Show your loved ones how much you really care with the complimentary special note.",
			image: {
				src: "http://www.themonolith.com/wp-content/uploads/bundleofsticks.jpg",
				alt: "A large bundle of sticks"
			}
		},
		2: {
			name: "Willow Tree",
			price: 90,
			description: 
			"Why buy a few sticks when you can get the whole tree?",
			image: {
				src: "https://cdn7.bigcommerce.com/s-f74ff/images/stencil/800x859/products/10106/24813/shutterstock_628403774__51361.1509235302.jpg?c=2&imbypass=on",
				alt: "A willow tree"
			}
		}
	},
	1: {
		3: {
			name: "Forest",
			price: 400,
			description: 
			"This forest is positively brimming with sticks, trees, and the like!",
			image: {
				src:"https://upload.wikimedia.org/wikipedia/commons/7/77/Latvian_Forest_Tomes_pagasts%2C_%C4%B6eguma_novads%2C_Latvia.jpg",
				alt:"A forest"
			}
		}
	}
}
export class Store extends Component {
	render() {
		return(
			<div className='container'>
				{Object.keys(products).map(j => {
					return(
						<div className='columns'>{
						Object.keys(products[j]).map(i => {
							const state = {
							title:products[j][i].name,
							description: products[j][i].description,
							price: products[j][i].price,
							image: {src: products[j][i].image.src, alt: products[j][i].image.alt}
						}
						return(
							<Link className='has-text-centered column is-4' to={{pathname:'/product', state}}>
								<img src={products[j][i].image.src}/><span className='column'>{products[j][i].name}</span>
							</Link>
							)
						})}
						</div>
						)
				})
					
				}
			</div>
			)
	}
}