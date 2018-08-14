import React from "react";
import Slider from "react-slick";
import DublinDay1 from '../../img/dublin/dublin-day1.png';
import Gaol from '../../img/dublin/gaol.png';
import Abb from '../../img/dublin/dublin_abb.png'
class Day1 extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <Slider {...settings}>
                <div className='slide-container'>
                    <img className='slide-image' src={DublinDay1} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Abb} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Gaol} alt="" />
                </div>
            </Slider>
        );
    }
}

export default Day1;