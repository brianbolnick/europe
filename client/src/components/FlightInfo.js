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
                    <div className="header-status"></div>
                    <div className="confirmation">
                        <div className="confirm-title"></div>
                        <div className="confirm-number"></div>
                    </div>
                </div>
            </div>
            <div className="flight-group"></div>
            <div className="layover-separator"></div>
            <div className="flight-group"></div>
        </div>
    )
}