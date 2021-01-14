import React from 'react'
import PopularCategories from '../components/mainpage/popularCategories'
import RecommendedCategories from '../components/mainpage/recommendedCategories'
import MainpageSlider from '../components/mainpage/slider'

export default function MainPage() {
    return (
        <>
            <MainpageSlider />
            <PopularCategories />
            <RecommendedCategories />
        </>
    )
}
