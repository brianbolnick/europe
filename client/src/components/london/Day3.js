import React from "react";
import Slider from "react-slick";
import LondonDay3 from '../../img/london/london-day3.png';
import Brian from '../../img/london/brian_city_jet.png';
import Ashley from '../../img/london/ashley_city_jet.png';
import Sam from '../../img/london/sam_city_jet.png';
import Jd from '../../img/london/jd_city_jet.png';
import Abb from '../../img/london/london_abb.png';

class Day3 extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true           
        };
        return (
            <Slider {...settings}>
                <div className='slide-container'>
                    <img className='slide-image' src={LondonDay3} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Abb} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Brian} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Ashley} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Sam} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Jd} alt="" />
                </div>
            </Slider>
        );
    }
}

export default Day3;