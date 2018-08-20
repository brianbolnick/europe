import React, { Component } from 'react';

class Day extends Component {
    render() {
        const { day, weather } = this.props;
        const current = weather[day];        

        return (
            <div className="flight-info-container">
                <div className="flight-info">
                    <div className="city-info-header">
                        <div className="header-left-group">
                            <div className="city-qheader-date">
                                {this.props.date}
                            </div>
                        </div>
                        <div className="header-right-group">
                            <div className="confirmation">
                                <div className="confirm-title">WEATHER</div>
                                <div className="confirm-number">{current && current.high}/{current && current.low} <img className="weather" src={current && current.condition} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="day-details">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Day;