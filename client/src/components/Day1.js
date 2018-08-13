import React from "react";
import Slider from "react-slick";
import DublinDay1 from '../img/dublin/dublin-day1.png';
class Day1 extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className='slide-container'>
                    <img className='slide-image' src={DublinDay1} alt="" />
                </div>                
            </Slider>
        );
    }
}

export default Day1;