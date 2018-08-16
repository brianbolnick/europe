import React from "react";
import Slider from "react-slick";
import ParisDay6 from '../../img/paris/paris-day6.png';
import Brian from '../../img/paris/brian_lourve.png';
import Ashley from '../../img/paris/ashley_lourve.png';
// import Jd from '../../img/paris/train_jd.png';
// import Sam from '../../img/paris/train_sam.png';


class Day6 extends React.Component {
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
                    <img className='slide-image' src={ParisDay6} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Brian} alt="" />
                </div>            
                <div className='slide-container'>
                    <img className='slide-image' src={Ashley} alt="" />
                </div>            
                {/* <div className='slide-container'>
                    <img className='slide-image' src={Jd} alt="" />
                </div>            
                <div className='slide-container'>
                    <img className='slide-image' src={Sam} alt="" /> 
                </div>            */}
            </Slider>
        );
    }
}

export default Day6;