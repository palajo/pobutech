import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'

import { listProducts } from '../redux/actions/productActions';

import Breadcrumbs from '../components/breadcrumbs'
import ProductBlock from '../components/catalog/product';
import Success from '../components/notices/success';
import Loading from '../components/notices/loading';
import { prices } from '../redux/helpers/filters';


export default function CatalogPage(props) {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products, page, pages } = productList;

    const {
        title = 'all',
        category = 'all',
        min = 0,
        max = 0,
        order = 'newest',
        pageNumber = 1,
    } = useParams();


    useEffect(() => {
        dispatch(listProducts({
            pageNumber,
            title: title !== 'all' ? title : '',
            category: category !== 'all' ? category : '',
            min,
            max,
            order
        }));
    }, [category, dispatch, max, min, title, order, pageNumber]);

    const getFilterUrl = (filter) => {
        const filterPage = filter.page || pageNumber;
        const filterCategory = filter.category || category;
        const filterTitle = filter.title || title;
        const sortOrder = filter.order || order;
        const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
        const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
        return `/catalog/${filterCategory}/${filterTitle}/min/${filterMin}/max/${filterMax}/order/${sortOrder}/pageNumber/${filterPage}`;
    };

    return (
        <>
           
            <div className="container">
                <div className="row">
                    <button className="filters-button">
                        ФІЛЬТРИ
                    </button>
                    <section className="sidebar-catalog">
                        <div className="category-header">
                            <div className="category-title">
                                <div className="category-icon icon fridge"></div>
                                {category}
                            </div>
                            <div className="category-sort">
                                <select 
                                    value={order}
                                    onChange={(e) => {props.history.push(getFilterUrl({ order: e.target.value }));}}
                                >
                                    <option value="newest">
                                        Newest Arrivals
                                    </option>
                                    <option value="lowest">
                                        Price: Low to High
                                    </option>
                                    <option value="highest">
                                        Price: High to Low
                                    </option>
                                </select>
                            </div>
                        </div>
                        <section className="sidebar">
                            <div className="sidebar-block">
                                <div className="sidebar-block-label">
                                    Filter by price:
                                </div>
                                <ul>
                                    {prices.map((p) => (
                                        <li key={p.name} className="filter-ul">
                                            <NavLink
                                                to={getFilterUrl({ min: p.min, max: p.max })}
                                                className={
                                                `${p.min}-${p.max}` === `${min}-${max}` ? 'active' : ''
                                                }
                                            >
                                                {p.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                        <section className="catalog">
                            <div className="catalog-products">
                                {
                                    loading ? (
                                        <Loading />
                                    ) : error ? (
                                        <div>{error}</div>
                                    ) : (
                                                products.map((product) => (
                                                    <ProductBlock
                                                        key={product._id}
                                                        _id={product._id}
                                                        image={product.image}
                                                        title={product.title}
                                                        productcode={product.productcode}
                                                        description={product.description}
                                                        price={product.price}
                                                    />
                                                ))
                                            )
                                }
                            </div>
                        </section>
                    </section>
                    <section className="pagination">
                        <ul>
                            {
                                [...Array(pages).keys()].map((x) => (
                                    <li>
                                        <NavLink
                                            className={x + 1 === page ? 'active' : ''}
                                            key={x + 1}
                                            to={getFilterUrl({ page: x + 1 })}
                                        >
                                            {x + 1}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}
