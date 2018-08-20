import React, { Component } from 'react';
import Countdown from './Countdown'
import { connect } from 'react-redux'
import { addNewTodo, fetchTodos, toggleTodoStatus } from '../actions/todoActions'
import DepartingFlightInfo from './DepartingFlightInfo';
import ReturningFlightInfo from './ReturningFlightInfo';
import Day from './common/Day';
import Day1 from './dublin/Day1';
import Day2 from './dublin/Day2';
import Day3 from './london/Day3';
import InterFlight from './InterFlight';
import Day4 from './london/Day4';
import Train from './Train';
import Day5 from './paris/Day5';
import Day6 from './paris/Day6';
import Day7 from './paris/Day7';
import Sunny from '../img/sun.png';
import Cloudy from '../img/cloud.png';
import PartlyCloudy from '../img/partly-cloudy.png';
import Rain from '../img/rain-cloud.png';
import axios from 'axios';

const DATE_MAP = {
	"21 Aug 2018": "day0",
	"22 Aug 2018": "day1",
	"23 Aug 2018": "day2",
	"24 Aug 2018": "day3",
	"25 Aug 2018": "day4",
	"26 Aug 2018": "day5",
	"27 Aug 2018": "day6",
	"28 Aug 2018": "day7",
	"29 Aug 2018": "day8",
	"30 Aug 2018": "day9",
	"31 Aug 2018": "day10"
}

class HomePage extends Component {

	state = {
		dublin: {},
		london: {},
		paris: {}
	}

	componentDidMount = () => {
		this.getDublinWeather();
		this.getLondonWeather();
		this.getParisWeather();
	}

	createUrl = (city, country) => {
		return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20${country}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
	}

	getCondition = code => {
		if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 35, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47].includes(parseInt(code))) {
			return Rain;
		} else if (code == 44) {
			return PartlyCloudy
		} else if ([26, 27, 28, 29, 30].includes(parseInt(code))) {
			return Cloudy
		} else {
			return Sunny
		}
	}

	getDublinWeather = () => {
		const url = this.createUrl('dublin', 'ireland');
		axios.get(url).then(res => {
			let data = res.data.query.results.channel.item.forecast;
			let dublin = data.reduce((acc, day) => {
				let key = day.date;
				const high = day.high;
				const low = day.low;

				const condition = this.getCondition(day.code);

				acc[DATE_MAP[key]] = { high, low, condition };
				return acc;
			}, {});

			this.setState({ dublin });
		});
	}
	getLondonWeather = () => {
		const url = this.createUrl('london', 'england');
		axios.get(url).then(res => {
			let data = res.data.query.results.channel.item.forecast;
			let london = data.reduce((acc, day) => {
				let key = day.date;
				const high = day.high;
				const low = day.low;

				const condition = this.getCondition(day.code);

				acc[DATE_MAP[key]] = { high, low, condition };
				return acc;
			}, {});

			this.setState({ london });
		});
	}
	getParisWeather = () => {
		const url = this.createUrl('paris', 'france');
		axios.get(url).then(res => {
			let data = res.data.query.results.channel.item.forecast;
			let paris = data.reduce((acc, day) => {
				let key = day.date;
				const high = day.high;
				const low = day.low;

				const condition = this.getCondition(day.code);

				acc[DATE_MAP[key]] = { high, low, condition };
				return acc;
			}, {});

			this.setState({ paris });
		});
	}

	render() {
		const { dublin, paris, london } = this.state;
		return (
			<div className="home-page">
				<div className="spacer"></div>
				<div className="itinerary-container">
					<div className="countdown">
						<Countdown date={`${2018}-08-21T16:45:00`} />
					</div>
					<div className="flight-info-container">
						<DepartingFlightInfo />
					</div>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
						{/* <div className="separator-text-container">
                            <span className='flight-separator-text'>Ireland - London - Paris</span>
                        </div> */}
					</div>
					<Day date="WED, AUG 22, 2018" location="DUBLIN" weather={dublin} day='day1'>
						<Day1 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<Day date="THURS, AUG 23, 2018" location="DUBLIN" weather={dublin} day='day2'>
						<Day2 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<div className="flight-info-container">
						<InterFlight />
					</div>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<Day date="FRI, AUG 24, 2018" location="LONDON" weather={london} day='day3'>
						<Day3 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<Day date="SAT, AUG 25, 2018" location="LONDON" weather={london} day='day4'>
						<Day4 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<div className="flight-info-container">
						<Train />
					</div>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<Day date="SUN, AUG 26, 2018" location="PARIS" weather={paris} day='day5'>
						<Day5 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<Day date="MON, AUG 27, 2018" location="PARIS" weather={paris} day="day6">
						<Day6 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<Day date="TUES, AUG 28, 2018" location="PARIS" weather={paris} day='day7'>
						<Day7 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<div className="flight-info-container">
						<ReturningFlightInfo />
					</div>
				</div>
				<div className="spacer"></div>
			</div>
		);
	}
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps, { addNewTodo, fetchTodos, toggleTodoStatus })(HomePage)
