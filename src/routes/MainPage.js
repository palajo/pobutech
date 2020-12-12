import React, { Component } from 'react'
import PopularCategories from '../assets/components/mainpage/popularCategories'
import RecommendedCategories from '../assets/components/mainpage/recommendedCategories'
import MainpageSlider from '../assets/components/mainpage/slider'

export default class MainPage extends Component {
    render() {
        return (
            <>
                <MainpageSlider />
                <PopularCategories />
                <RecommendedCategories />
            </>
        )
    }
}
