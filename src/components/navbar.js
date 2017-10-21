import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <nav className="navbar navbar-default navbar-lms navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            HOME
          </Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="pageOne">Page One</Link></li>
            <li><Link to="pageTwo">Page Two</Link></li>
            <li><a target="_blank" href="https://twitter.com/deshatom">Twitter</a></li>
            <li><a target="_blank" href="https://lk.linkedin.com/in/deshan-madurajith-600129108">LinkedIn</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><Link to="about">About<span className="sr-only">(current)</span></Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
