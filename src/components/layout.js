import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import style from './style.css';

class Layout extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-inverse navbar-fixed-top'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button aria-controls='navbar' aria-expanded='false' className='navbar-toggle collapsed' data-target='#navbar' data-toggle='collapse' type='button'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <a className='navbar-brand' href='#'>Home</a>
            </div>
            <div className='navbar-collapse collapse' id='navbar'>
              <form className='navbar-form navbar-right'>
                <input className='form-control' placeholder='Search...' type='text' />
              </form>
            </div>
          </div>
        </nav>
        <div className='container-fluid'>
          <div className={`row application-row ${style.container}`}>
            <div className='col-sm-12 main'>
              <div className='row'>
                <div className='col-sm-2 main'>
                  <ul className='nav nav-pills nav-stacked'>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/papers'>Papers</Link>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-10 main'>
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
