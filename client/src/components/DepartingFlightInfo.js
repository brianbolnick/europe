import React from 'react'

export default () => {
    return (
        <div className="flight-info">
            <div className="flight-info-header">
                <div className="header-left-group">
                    <div className="header-date">
                        WED, AUG 21, 2018
                    </div>
                    <div className="header-cities">
                        <span>SLC </span> <span><i className="fas fa-arrow-right"></i> </span> <span> DUB</span>
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
                        <div className="city">Salt Lake City</div>
                        <div className="airport">SLC</div>
                        <div className="time">9:45 A</div>
                    </div>
                    <div className="flight-duration">
                        <div className="duration-time">4 h 55 m</div>
                        <div className="duration-arrow"><i className="fas fa-arrow-right" style={{ color: '#d7d7d7', fontSize: '1.5rem' }}></i></div>
                    </div>
                    <div className="single-flight">
                        <div className="city">Boston</div>
                        <div className="airport">BOS</div>
                        <div className="time">4:40 P</div>
                    </div>
                </div>

                <div className="flight-details">
                    <div className="flight-detail-container" style={{ borderRight: 'solid 1px #d7d7d785', paddingRight: '15px' }}>
                        <div className="label">Flight</div>
                        <div className="value">DL 2124</div>
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
                        <div className="value">28D/E</div>
                    </div>
                </div>
            </div>
            <div className="layover-separator">
                <span className="separator-title">
                    5 hour layover
                </span>
            </div>
            <div className="flight-group">
                <div className="flight-group-left">
                    <div className="flight-logo">
                        <img src="http://www.fox21online.com/wp-content/uploads/2017/04/delta-logo-300x300.png" alt="" className='flight-img' />
                    </div>
                    <div className="single-flight">
                        <div className="city">Boston</div>
                        <div className="airport">BOS</div>
                        <div className="time">9:48 P</div>
                    </div>
                    <div className="flight-duration">
                        <div className="duration-time">6 h 07 m</div>
                        <div className="duration-arrow"><i className="fas fa-arrow-right" style={{ color: '#d7d7d7', fontSize: '1.5rem' }}></i></div>
                    </div>
                    <div className="single-flight">
                        <div className="city">Dublin</div>
                        <div className="airport">DUB</div>
                        <div className="time">8:55 A</div>
                    </div>
                </div>

                <div className="flight-details">
                    <div className="flight-detail-container" style={{ borderRight: 'solid 1px #d7d7d785', paddingRight: '15px' }}>
                        <div className="label">Flight</div>
                        <div className="value">DL 154</div>
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
                        <div className="value">38C/B</div>
                    </div>
                </div>
            </div>
        </div>
    )
}