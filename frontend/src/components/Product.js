import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export class Product extends Component {
  render() {
      return(
        <div className="section">
          <div className="container">
            <div className="columns" style={{minHeight:'800px'}}>
              <div className="column is-6">
                <div className="image is-2by2">
                  <img src="https://cdn.scotch.io/2842/b7yhhuUPSGO1fEkMHD6P_sticks.jpeg"/>
                </div>
              </div>
              <div className="column is-5 is-offset-1">
                <div className="title is-2">Bundle of Sticks</div>
                <p class="title is-3 has-text-muted">$ 15</p>
                <hr/>
                <br/>
                <p>This bundle of sticks provides  an earthy fragrance and aesthetic natural appeal. 
                Your bundle of sticks will come with a personalized note. 
                The perfect natural gift for any time of year!</p>
                <br/>
                <br/>
                <p class='level'>
                  <Link to="/order" class="button is-large is-primary level-item has-text-centered">Buy Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
