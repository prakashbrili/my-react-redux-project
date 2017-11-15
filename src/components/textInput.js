/**
 * Created by prakash.shivanna on 13/11/17.
 */

import React from "react";
import Classnames from "classnames";
// import PropTypes from "prop-types";
// import { values } from "underscore";

const TextInput = ({ children,classNames, ...elementProps }) => {
    const classes = Classnames("text__input",classNames);

    return (
        <div className={classes} {...elementProps}>
            {children}
        </div>
    );
};

export default TextInput;

export const Input = ({ name,placeholder, classNames,abc,setText,...elementProps }) => {
    const classes = Classnames("input",classNames);
    return <input className={classes}
                  name={name}
                  placeholder={placeholder}
                  {...elementProps}

                  ref={node => {
                      abc = node;
                  }}
            />;
};
