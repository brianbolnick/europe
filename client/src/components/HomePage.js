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

class HomePage extends Component {
	render() {
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
					<Day date="WED, AUG 22, 2018" location="DUBLIN">
						<Day1 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<Day date="THURS, AUG 23, 2018" location="DUBLIN">
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
					<Day date="FRI, AUG 24, 2018" location="LONDON">
						<Day3 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<Day date="SAT, AUG 25, 2018" location="LONDON">
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
					<Day date="SUN, AUG 26, 2018" location="PARIS">
						<Day5 />
					</Day>
					<div className="separator-container">
						<div className="flight-info-separator"></div>
					</div>
					<Day date="MON, AUG 27, 2018" location="PARIS">
						<Day6 />
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
