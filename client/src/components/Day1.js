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
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        );
    }
}

export default Day1;