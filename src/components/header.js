/**
 * Created by prakash.shivanna on 12/11/17.
 */

import React from 'react';
import { Link } from 'react-router';

export default (props) => {
    return (
        <header className="headerWrap App-content clearfix">
            <div className="brandContainer">
                <Link to="/" href="#" className="brand">
                    <span>Airline</span>
                </Link>
                <a href="https://www.linkedin.com/in/prakash-s-75682660/"  target="_blank" className="linkedin align--right">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
            </div>
        </header>
    );
}
