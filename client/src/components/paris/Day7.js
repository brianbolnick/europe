import React from "react";
import Slider from "react-slick";
import ParisDay7 from '../../img/paris/paris-day7.png';
import Brian from '../../img/paris/vers_brian.png';
import Ashley from '../../img/paris/vers_ash.png';
// import Jd from '../../img/paris/train_jd.png';
// import Sam from '../../img/paris/train_sam.png';


class Day7 extends React.Component {
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
                    <img className='slide-image' src={ParisDay7} alt="" />
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

export default Day7;