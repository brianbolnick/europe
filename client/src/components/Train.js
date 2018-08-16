import React from 'react'

export default () => {
    return (
        <div className="flight-info">
            <div className="train-info-header">
                <div className="header-left-group">
                    <div className="header-date">
                        SUN, AUG 26, 2018
                    </div>
                    <div className="header-cities">
                        <span>LON </span> <span><i className="fas fa-arrow-right"></i> </span> <span> PAR</span>
                    </div>
                </div>
                <div className="header-right-group">
                    <div className="header-status">
                        <i className="fas fa-check"></i>
                    </div>
                    <div className="confirmation">
                        <div className="confirm-title">CONFIRMATION</div>
                        <div className="confirm-number">SFOWEX</div>
                    </div>
                </div>
            </div>
            <div className="flight-group">
                <div className="flight-group-left">
                    <div className="flight-logo">
                        <img src="https://content.eurostar.com/images/navigation-logo-desktop.svg" alt="" className='flight-img' style={{width: '100px', verticalAlign: 'baselines' }}/>
                    </div>
                    <div className="single-flight">
                        <div className="city">London</div>
                        <div className="airport">LON</div>
                        <div className="time">8:19 A</div>
                    </div>
                    <div className="flight-duration">
                        <div className="duration-time">2 h 28 m</div>
                        <div className="duration-arrow"><i className="fas fa-arrow-right" style={{ color: '#d7d7d7', fontSize: '1.5rem' }}></i></div>
                    </div>
                    <div className="single-flight">
                        <div className="city">Paris</div>
                        <div className="airport">PAR</div>
                        <div className="time">11:47 A</div>
                    </div>
                </div>

                <div className="flight-details">
                    <div className="flight-detail-container" style={{ borderRight: 'solid 1px #d7d7d785', paddingRight: '15px' }}>
                        <div className="label">Coach</div>
                        <div className="value">4</div>
                    </div>
                    <div className="flight-detail-container">
                        <div className="label">Seats</div>
                        <div className="value">51-54</div>
                    </div>
                </div>
            </div>
            <div className="layover-separator">
                <span className="separator-title">
                    Nonstop
                </span>
            </div>
            <div className="flight-group">
                
            </div>
        </div>
    )
}