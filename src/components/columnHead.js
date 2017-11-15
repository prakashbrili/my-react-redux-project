/**
 * Created by prakash.shivanna on 13/11/17.
 */

import React from "react";
import ClassNames from "classnames";

const ColumnHead = ({ children,classNames,dataInputs, ...elementProps }) => {
    const classes = ClassNames("column--header clearfix",classNames);
    return (
        <div className={classes} {...elementProps}>
            <div className="flex__start flights--selected--title">
                <h4 className="title title--route">{dataInputs.originCity} <i className="fa fa-fighter-jet" aria-hidden="true" /> {dataInputs.destinationCity} <i className="fa fa-fighter-jet" aria-hidden="true" /> {dataInputs.originCity}</h4>
            </div>
            <div className="flex__end flights--selected--date">
                {children}
                <p className="title--small"><i className="fa fa-plane" aria-hidden="true" /> Depart : {dataInputs.departureDate}</p>
                <p className="title--small"><i className="fa fa-plane fa-plane-ret" aria-hidden="true" /> Return : {dataInputs.returnDate}</p>
            </div>
        </div>
    );
};

export default ColumnHead;

