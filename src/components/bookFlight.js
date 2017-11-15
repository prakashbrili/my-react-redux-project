/**
 * Created by prakash.shivanna on 15/11/17.
 */

import React from "react";
import ClassNames from "classnames";

const BookFlight = ({ classNames,data }) => {
    const classes = ClassNames("column--header clearfix",classNames);
    return (
        <div className={classes}>
            <div>
                {data}
            </div>
        </div>
    );
};

export default BookFlight;


