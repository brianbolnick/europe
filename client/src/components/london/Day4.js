import React from "react";
import Slider from "react-slick";
import LondonDay4 from '../../img/london/london-day4.png';
import Hp from '../../img/london/hp_tour.png';


class Day4 extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false            
        };
        return (
            <Slider {...settings}>
                <div className='slide-container'>
                    <img className='slide-image' src={LondonDay4} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Hp} alt="" />
                </div>            
            </Slider>
        );
    }
}

export default Day4;