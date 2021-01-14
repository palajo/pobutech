import React, { useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { listProductCategories } from '../redux/actions/productActions';
import Loading from './notices/loading';

export default function Menu() {

    $(document).ready(function() {
        $('ul.main-ul > li.main-item').hover(function () {
            $('ul.main-ul > li.main-item').removeClass('active');
            $(this).addClass('active');
        })
    });
    const closeMenu = () => {
        $('.menu').removeClass('active');
        $('.open-catalog').removeClass('active');
    }
    const dispatch = useDispatch();

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const { loading, error, categories } = productCategoryList;

    useEffect(() => {
        dispatch(listProductCategories());
      }, [dispatch]);

    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    <ul className="main-ul">
                        {
                            loading ? (
                                <Loading />
                            ) : error ? (
                                <div>{error}</div>
                            ) : (
                                categories.map((c) => (
                                    <li className="main-item" key={c}>
                                        <NavLink 
                                            className="main-link" 
                                            to={`/catalog/${c}`}
                                            onClick={closeMenu}
                                        >
                                            <div className="main-ul-icon icon washing-machine"></div>
                                                {c}
                                            </NavLink>
                                        <div className="sub-ul-container">
                                        </div>
                                    </li>
                                ))
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="menu-overlay"></div>
        </div>
    )
}