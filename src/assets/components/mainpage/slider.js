import React, { Component } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import SliderImage from '../../images/slider.jpg';
import arrowRight from '../../images/icons/arrow-right-red.svg';
import arrowLeft from '../../images/icons/arrow-left-red.svg';


function NextArrow(props) {
	const { onClick } = props;
	return (
		<div className="arrow arrow-right" onClick={onClick}>
			<div className="arrow-icon arrow-icon-right"></div>
		</div>
	);
}

function PreviousArrow(props) {
	const { onClick } = props;
	return (
		<div className="arrow arrow-left" onClick={onClick}>
			<div className="arrow-icon arrow-icon-left"></div>
		</div>
	);
}


export default class MainpageSlider extends Component {
    render() {

        const settingsMain = {
            dots: true,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: <PreviousArrow />,
            nextArrow: <NextArrow />,
            dotsClass: "slick-dots slick-thumb",
            customPaging: function(i) {
                return (
                  <div className="slider-dot"></div>
                );
              },	
        };

        return (
            <div className="container mainpage-slider">
                <div className="row">
                    <Slider
                        {...settingsMain}
                    >
                        <div className="mainpage-slider-slide">
                            <div className="content-block">
                                <div>
                                    <h2>
                                        You may find in our online-shop!
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna.
                                    </p>
                                    <button className="button">
                                        Show now!
                                    </button>
                                </div>
                            </div>
                            <div className="image-block">
                                <img src={SliderImage} alt="slider-image" />
                            </div>
						</div>
                        <div className="mainpage-slider-slide">
                            <div className="content-block">
                                <div>
                                    <h2>
                                        You may find in our online-shop1!
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna.
                                    </p>
                                    <button className="button">
                                        Show now!
                                    </button>
                                </div>
                            </div>
                            <div className="image-block">
                                <img src={SliderImage} alt="slider-image" />
                            </div>
						</div>
                    </Slider>
                </div>
            </div>
        )
    }
}
