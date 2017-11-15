/**
 * Created by prakash.shivanna on 13/11/17.
 */

import React from "react";
import "./flightDetail.scss";
import ClassNames from "classnames";

const FlightDetails = ({data, idUpdate, oneWay, classNames}) => {
    const classes = ClassNames("flights flights__detail", classNames);
    const depDate = new Date(data.departDate);
    const depDateString = depDate.toLocaleDateString();
    const arrDate = new Date(data.arriveDate);
    const arrDateString = arrDate.toLocaleDateString();

    const retDepDate = new Date(data.returnTrip.departDate);
    const retDepDateString = retDepDate.toLocaleDateString();

    const retArrDate = new Date(data.returnTrip.arriveDate);
    const retArrDateString = retArrDate.toLocaleDateString();

    return (

        <div className={classes}>
            <div className="flights__price">
                <h2 className="title--fprice">&#8377;  {data.price}</h2>

            </div>
            <div className="flights__detail__container">
                <div className="flights--departure">
                    <h4>{data.number}</h4>
                    <h2>{data.origin} <i className="fa fa-fighter-jet" aria-hidden="true"/> {data.destination} </h2>
                    <h4><i className="fa fa-plane" aria-hidden="true"/> Depart : {depDateString}</h4>
                    <h4><i className="fa fa-plane" aria-hidden="true"/> Arrival : {arrDateString}</h4>
                </div>
                {!oneWay ? <div className="flights--arrival">
                    <h4>{data.returnTrip.number}</h4>
                    <h2>{data.returnTrip.origin} <i className="fa fa-fighter-jet"
                                                    aria-hidden="true"/> {data.returnTrip.destination} </h2>
                    <h4><i className="fa fa-plane" aria-hidden="true"/> Depart : {retDepDateString}</h4>
                    <h4><i className="fa fa-plane" aria-hidden="true"/> Arrival : {retArrDateString}</h4>
                </div> : null}
                <div className="flights--image">
                    <img alt={data.airline}
                         src={require(`../../static/images/flights/${data.image}`)}/>
                    <button className="button button--style-primary button--book" onClick={ () => idUpdate(data) }>
                        Book
                    </button>
                </div>
            </div>
        </div>
    );
};


export default FlightDetails;
