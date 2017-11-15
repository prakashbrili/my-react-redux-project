import React, {Component} from 'react';
import classNames from 'classnames';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import "./home.scss"
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import 'react-input-range/lib/css/index.css';

import Button from "../../components/button";
import InputRange from 'react-input-range';
import FlightDetails from '../../components/flightDetails/flightDetails'
import ColumnHead from '../../components/columnHead'
import BookFlight from '../../components/bookFlight'
import AirlineData from '../../utility/dataSource';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceData: AirlineData,
            oneWay: false,
            twoWay: true,
            userInputsData: [],
            departureDate: moment(),
            returnDate: moment().add(1, 'day'),
            disableDatePicker: false,
            passengerCount: 1,
            isError: false,
            errorMessage: '',
            errorMessageOverlay:'',
            originCity: '',
            destinationCity: '',
            columnHead: false,
            isServiceSearch: false,
            searchResults: [],
            filteredData: [],
            bookThisFlight: [],
            showErrorContent: false,
            price: {
                min: 500,
                max: 8600,
            },
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeOrigin = this.handleChangeOrigin.bind(this);
    }


    componentDidMount() {
        const searchResults = this.state.serviceData.map((data, i) => {
            return data;
        });
        this.setState({
            searchResults: searchResults,
            isServiceSearch: true,
        });
    }

    handleSearch() {
        const dDate = new Date(this.state.departureDate);
        const depDate = dDate.toLocaleDateString();
        const rDate = new Date(this.state.returnDate);
        const retDate = rDate.toLocaleDateString();
        const userInputs = {
            oneWay: this.state.oneWay,
            originCity: this.state.originCity.toUpperCase(),
            destinationCity: this.state.destinationCity.toUpperCase(),
            departureDate: depDate,
            returnDate: retDate,
            passengers: this.state.passengerCount,
        };

        if (this.state.originCity.trim().length === 0 || this.state.destinationCity.trim().length === 0) {
            this.setState({
                errorMessage: "Please enter all the input fields.",
                showErrorContent: true,
            });
            return false;
        }else{
            this.setState({
                columnHead: true,
                userInputsData: userInputs,
                errorMessage: "",
                showErrorContent: false,
            });
            const searchResults = this.state.serviceData.filter((data, i) => {
                let ip = userInputs;
                let depDate = data.departDate;
                let depDateISO = new Date(depDate);
                let dDate = depDateISO.toLocaleDateString();
                let arrDate = data.arriveDate;
                let arrDateISO = new Date(arrDate);
                let aDate = arrDateISO.toLocaleDateString();
                return ip.originCity === data.origin && ip.destinationCity === data.destination && ip.departureDate === dDate && ip.returnDate === aDate;
            });
            this.setState({
                searchResults: searchResults,
                isServiceSearch: true,
            });

            if(searchResults.length === 0){
                this.setState({
                    showErrorContent: true,
                    errorSearchMessage: 'Ooops, No records found'
                });
            }
        }
    }

    filterResults() {
        console.log("this.state.searchResults : ", JSON.stringify(this.state.searchResults.length));
        const filteredData = this.state.searchResults.filter((data) => {
            return data.price <= this.state.price.max && data.price >= this.state.price.min;
        });
        this.setState({
            filteredData: filteredData,
            isServiceSearch: false,
        });
    }

    render() {
        return (
            <div className="container clearfix">
                <div className="overlay">
                    <div className="overlay--container">
                       <BookFlight data={this.state.bookThisFlight}/>
                    </div>
                </div>
                <div className="column column__side">
                    <div className="form form__flight">
                        <div className="searchTypes clearfix">
                            <ul>
                                <li className={classNames('tripType', this.state.oneWay ? 'tripSelected' : '')}
                                    onClick={this.oneWaySearch.bind(this)}>
                                    <span className="tripText trip-text-one">One Way</span>
                                    <span className={classNames('checkTripRound', !this.state.twoWay ? 'checkTripSelected' : '')} />
                                </li>

                                <li className={classNames('tripType', 'returnTrip', this.state.twoWay ? 'tripSelected' : '')}
                                    onClick={this.twoWaySearch.bind(this)}>
                                    <span className={classNames('checkTripRound', this.state.twoWay ? 'checkTripSelected' : '')} />
                                    <span className="tripText trip-text-two">Return</span>

                                </li>
                            </ul>
                        </div>

                        <div className="inputContainer inputCity">
                            <input className="input" type="text" placeholder="Enter Origin City"
                                   value={this.state.originCity}
                                   onChange={ this.handleChangeOrigin.bind(this) }
                            />
                        </div>
                        <div className="inputContainer inputCity">
                            <input className="input" type="text" placeholder="Enter Destination City"
                                   value={this.state.destinationCity}
                                   onChange={ this.handleChangeDestination.bind(this) }
                            />
                        </div>

                        <div className="dateContainer clearfix">
                            <ul>
                                <li>
                                    <div>
                                        <h3 className="title title--calender">Departure <span>date</span></h3>
                                        <DatePicker
                                            className="input datePicker datepick"
                                            selected={this.state.departureDate}
                                            excludeDates={[moment(), moment().subtract(10, "days")]}
                                            onChange={this.changeDepartureDate.bind(this)}
                                            minDate={moment()}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className={classNames(this.state.disableDatePicker ? 'opacitDim' : '')}>
                                        <h3 className="title title--calender">Return <span>date</span></h3>
                                        <DatePicker
                                            className="input datePicker datepick"
                                            selected={this.state.returnDate}
                                            onChange={this.changeReturnDate.bind(this)}
                                            minDate={moment()}
                                            disabled={this.state.disableDatePicker}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="passengersContainer clearfix">
                            <h4 className="passengerTitle"> <i className="fa fa-user-plus" aria-hidden="true" /> Passengers</h4>
                            <div className="countBtns">
                                <ul>
                                    <li onClick={ () => this.decrement(this.state.passengerCount)}
                                        className="minus"/>
                                    <li className="passengerCount hightlightText">{this.state.passengerCount}</li>
                                    <li onClick={ () => this.increment(this.state.passengerCount)}
                                        className="plus"/>
                                </ul>
                            </div>
                        </div>

                        <div className="error errorMessage"><span>{this.state.errorMessage}</span></div>
                        <div className="buttonContainer">
                            <Button onClick={() => this.handleSearch()}>Search  <i className="fa fa-search" aria-hidden="true" /></Button>
                        </div>


                        <div className="priceRangeContainer">
                            <h4 className="title">Refine flight search</h4>
                            <InputRange
                                className="priceRange"
                                maxValue={10000}
                                minValue={0}
                                formatLabel={price => `₹ ${price}`}
                                value={this.state.price}
                                onChange={price => this.setState({price})}
                                onChangeComplete={ () => this.filterResults()}
                            />
                        </div>
                    </div>
                </div>
                <div className="column column__main">
                    {this.state.columnHead ? <ColumnHead dataInputs={this.state.userInputsData}/> : null}
                    {this.state.showErrorContent ? <div className="title error--result">{this.state.errorSearchMessage}</div> : null}
                    <div className="flight--content">
                    { this.state.isServiceSearch ? this.state.searchResults.map((data, i) => {
                        return (<FlightDetails idUpdate={this.idUpdate} oneWay={this.state.oneWay} key={i} data={data}/>)
                    }) : this.state.filteredData.map((data, i) => {
                        return (<FlightDetails idUpdate={this.idUpdate} key={i} oneWay={this.state.oneWay} data={data}/>)
                    })}
                    </div>
                </div>
            </div>
        );
    }

    idUpdate(id){
        console.log("idUpdate :: ",id);
    }

    changeDepartureDate(departureDate) {
        this.setState({
            departureDate: moment(departureDate._d),
        });
    }

    changeReturnDate(returnDate) {
        this.setState({
            returnDate: moment(returnDate._d),
        });
    }

    oneWaySearch() {
        this.setState({
            oneWay: true,
            twoWay: false,
            disableDatePicker: true,
        })
    }

    twoWaySearch() {
        this.setState({
            oneWay: false,
            twoWay: true,
            disableDatePicker: false,
        })
    }

    decrement() {
        let counter = this.state.passengerCount;
        if (counter > 0) {
            this.setState({
                passengerCount: this.state.passengerCount - 1,
            });
        }
    }

    increment() {
        this.setState({
            passengerCount: this.state.passengerCount + 1,
        })
    }

    handleChangeOrigin(e) {
        this.setState({originCity: e.target.value,errorMessage: false,});
    }

    handleChangeDestination(e) {
        this.setState({destinationCity: e.target.value,errorMessage: false,});
    }
}

export default Home;
