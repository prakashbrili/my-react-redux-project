/**
 * Created by prakash.shivanna on 13/11/17.
 */

import React from "react";
import Classnames from "classnames";
import PropTypes from "prop-types";
// import "../css/button.css";
import { values } from "underscore";

export const BUTTON_STYLES = {
    primary: "primary",
    secondary: "secondary"
};

const Button = ({ children, buttonStyle, ...elementProps }) => {
    const classes = Classnames("button", `button--style-${buttonStyle}`);

    return (
        <button className={classes} {...elementProps}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    buttonStyle: BUTTON_STYLES.primary
};

Button.propTypes = {
    buttonStyle: PropTypes.oneOf(values(BUTTON_STYLES))
};

export default Button;

