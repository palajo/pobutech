import React from 'react'

import 'slick-carousel/slick/slick';
import "slick-carousel/slick/slick.css";

import $ from 'jquery';

export default function ProductImages(props) {
    
    $(document).ready(function() {
        $('#slider.product-image').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '#slider.product-image-thumbs'
        });
        $('#slider.product-image-thumbs').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#slider.product-image',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            prevArrow: '<div className="arrow arrow-left"></div>',
            nextArrow: '<div className="arrow arrow-right"></div>',
        });    
    });

    return (
        <div className="product-image-block">
            <div className="product-image" id="slider">
                <img src={'/images/' + props.image} alt="product-image" />
                <img src={'/images/' + props.image} alt="product-image" />
                <img src={'/images/' + props.image} alt="product-image" />
                <img src={'/images/' + props.image} alt="product-image" />
            </div>
            <div className="product-image-thumbs" id="slider">
                <img src={'/images/' + props.image} alt="product-image" />
                <img src={'/images/' + props.image} alt="product-image" />
                <img src={'/images/' + props.image} alt="product-image" />
                <img src={'/images/' + props.image} alt="product-image" />
            </div>
        </div>
    )
}
