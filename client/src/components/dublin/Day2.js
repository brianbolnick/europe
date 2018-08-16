import React from "react";
import Slider from "react-slick";
import DublinDay2 from '../../img/dublin/dublin-day2.png';
import Blarney from '../../img/dublin/blarney_tour.png';

class Day2 extends React.Component {
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
                    <img className='slide-image' src={DublinDay2} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Blarney} alt="" />
                </div>
            </Slider>
        );
    }
}

export default Day2;