import React, { Component } from 'react'

import ProductImage from '../../images/product-big.png';

import 'slick-carousel/slick/slick';
import "slick-carousel/slick/slick.css";

import $ from 'jquery';

import ArrowLeft from '../../images/icons/thumbs-arrow-left.svg';
import ArrowRight from '../../images/icons/thumbs-arrow-right.svg';

export default class ProductImages extends Component {
    componentDidMount() {
        $('#slider.product-image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '#slider.product-image-thumbs'
        });
        $('#slider.product-image-thumbs').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#slider.product-image',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            prevArrow: '<div class="arrow arrow-left"></div>',
            nextArrow: '<div class="arrow arrow-right"></div>',
        });
    }
    render() {
        return (
            <div className="product-image-block">
                <div className="product-image" id="slider">
                    <img src={ProductImage} alt="product-image" />
                    <img src={ProductImage} alt="product-image" />
                    <img src={ProductImage} alt="product-image" />
                    <img src={ProductImage} alt="product-image" />
                </div>
                <div className="product-image-thumbs" id="slider">
                    <img src={ProductImage} alt="product-image" />
                    <img src={ProductImage} alt="product-image" />
                    <img src={ProductImage} alt="product-image" />
                    <img src={ProductImage} alt="product-image" />
                </div>
            </div>
        )
    }
}
