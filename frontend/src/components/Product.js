import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Product extends Component {
  render() {
      return(
        <div className="section">
          <div className="container">
            <div className="columns" style={{minHeight:'800px'}}>
              <div className="column is-6">
                <div className="image is-2by2">
                  <img src={this.props.location.state.image.src} alt={this.props.location.state.image.alt}/>
                </div>
              </div>
              <div className="column is-5 is-offset-1">
                <div className="title is-2">{this.props.location.state.title}</div>
                <p className="title is-3 has-text-muted">${this.props.location.state.price}</p>
                <hr/>
                <br/>
                <p>{this.props.location.state.description}</p>
                <br/>
                <br/>
                <p className='level'>
                  <Link to={{pathname:"/order", state: {
                    description: this.props.location.state.description,
                    amount: this.props.location.state.price,
                    image: {
                      src: this.props.location.state.image.src,
                      alt: this.props.location.state.image.alt
                    }
                  }}} className="button is-large is-primary level-item has-text-centered">Buy Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
