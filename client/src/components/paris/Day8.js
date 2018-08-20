import React from "react";
import Slider from "react-slick";
import ParisDay8 from '../../img/paris/paris-day8.png';
import Brian from '../../img/paris/catacombs_brian.png';
import Jd from '../../img/paris/catacombs_jd.png';
// import Jd from '../../img/paris/train_jd.png';
// import Sam from '../../img/paris/train_sam.png';


class Day8 extends React.Component {
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
                    <img className='slide-image' src={ParisDay8} alt="" />
                </div>
                <div className='slide-container'>
                    <img className='slide-image' src={Brian} alt="" />
                </div>            
                <div className='slide-container'>
                    <img className='slide-image' src={Jd} alt="" />
                </div>            
            </Slider>
        );
    }
}

export default Day8;