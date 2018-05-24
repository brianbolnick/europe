import React from 'react'

export default () => {
    return (
        <div className="flight-info">
            <div className="flight-info-header">
                <div className="header-left-group">
                    <div className="header-date">
                        THU, AUG 30, 2018
                    </div>
                    <div className="header-cities">
                        <span>CDG </span> <span><i className="fas fa-arrow-right"></i> </span> <span> SLC</span>
                    </div>
                </div>
                <div className="header-right-group">
                    <div className="header-status">
                        <i className="fas fa-check"></i>
                    </div>
                    <div className="confirmation">
                        <div className="confirm-title">CONFIRMATION</div>
                        <div className="confirm-number">GXEUDN</div>
                    </div>
                </div>
            </div>
            <div className="flight-group">
                <div className="flight-group-left">
                    <div className="flight-logo">
                        <img src="http://www.fox21online.com/wp-content/uploads/2017/04/delta-logo-300x300.png" alt="" className='flight-img' />
                    </div>
                    <div className="single-flight">
                        <div className="city">Paris</div>
                        <div className="airport">CDG</div>
                        <div className="time">10:15 A</div>
                    </div>
                    <div className="flight-duration">
                        <div className="duration-time">10 h 54 m</div>
                        <div className="duration-arrow"><i className="fas fa-arrow-right" style={{ color: '#d7d7d7', fontSize: '1.5rem' }}></i></div>
                    </div>
                    <div className="single-flight">
                        <div className="city">Salt Lake City</div>
                        <div className="airport">SLC</div>
                        <div className="time">1:09 P</div>
                    </div>
                </div>

                <div className="flight-details">
                    <div className="flight-detail-container" style={{ borderRight: 'solid 1px #d7d7d785', paddingRight: '15px' }}>
                        <div className="label">Flight</div>
                        <div className="value">DL 107</div>
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
                        <div className="value">34B/A</div>
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