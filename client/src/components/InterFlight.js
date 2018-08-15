import React from 'react'

export default () => {
    return (
        <div className="flight-info">
            <div className="flight-info-header">
                <div className="header-left-group">
                    <div className="header-date">
                        FRI, AUG 24, 2018
                    </div>
                    <div className="header-cities">
                        <span>DUB </span> <span><i className="fas fa-arrow-right"></i> </span> <span> LGW</span>
                    </div>
                </div>
                <div className="header-right-group">
                    <div className="header-status">
                        <i className="fas fa-check"></i>
                    </div>
                    <div className="confirmation">
                        <div className="confirm-title">CONFIRMATION</div>
                        <div className="confirm-number">MIK86V</div>
                    </div>
                </div>
            </div>
            <div className="flight-group">
                <div className="flight-group-left">
                    <div className="flight-logo">
                        <img src="https://i.pinimg.com/originals/ef/8b/1b/ef8b1bba00be657d7b80214bb1de6c98.jpg" alt="" className='flight-img' />
                    </div>
                    <div className="single-flight">
                        <div className="city">Dublin</div>
                        <div className="airport">DUB</div>
                        <div className="time">8:40 A</div>
                    </div>
                    <div className="flight-duration">
                        <div className="duration-time">1 h 30 m</div>
                        <div className="duration-arrow"><i className="fas fa-arrow-right" style={{ color: '#d7d7d7', fontSize: '1.5rem' }}></i></div>
                    </div>
                    <div className="single-flight">
                        <div className="city">London (Gatwick)</div>
                        <div className="airport">LGW</div>
                        <div className="time">10:10 A</div>
                    </div>
                </div>

                <div className="flight-details">
                    <div className="flight-detail-container" style={{ borderRight: 'solid 1px #d7d7d785', paddingRight: '15px' }}>
                        <div className="label">Flight</div>
                        <div className="value">WX0 114</div>
                    </div>
                    <div className="flight-detail-container" style={{ borderRight: 'solid 1px #d7d7d785', paddingRight: '15px' }}>
                        <div className="label">Terminal</div>
                        <div className="value">TBD</div>
                    </div>
                    <div className="flight-detail-container" style={{ borderRight: 'solid 1px #d7d7d785', paddingRight: '15px' }}>
                        <div className="label">Gate</div>
                        <div className="value">TBD</div>
                    </div>
                    <div className="flight-detail-container">
                        <div className="label">Seat</div>
                        <div className="value">TBD</div>
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