import React, { Component } from 'react';
import {Order} from './Order';
import {Store} from './Store';
import {Product} from './Product';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export class BasicExample extends Component {
  render() {
    return(
      <Router>
      <div className='hero-head'>
        <div className='container'>
          <nav className='nav'>
            <div className='nav-left'>
              <Link to='/' className='nav-item'>Stickly</Link>
            </div>
            <span className='nav-toggle'>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className='nav-right nav-menu'>
              <Link to='/about' className='nav-item'>About</Link>
            </div>
              <hr/>
            </nav>
          </div>
          <Route exact path='/' component={Store}/>
          <Route path='/about' component={About}/>
          <Route path='/product' component={Product}/>
          <Route path='/order' component={Order}/>
        </div>
      </Router>
    )
  }
}