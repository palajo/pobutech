import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/styles/styles.scss';

import Header from './components/header';
import Footer from './components/footer';

import MainPage from './routes/MainPage';
import ProductPage from './routes/ProductPage';
import CatalogPage from './routes/CatalogPage';
import DeliveryPage from './routes/DeliveryPage';
import ContactsPage from './routes/ContactsPage';
import WarrantyPage from './routes/WarrantyPage';
import BusinessPage from './routes/BusinessPage';
import CheckoutPage from './routes/CheckoutPage';
import ThanksPage from './routes/ThanksPage';
import ReturnPage from './routes/ReturnPage';

import ScrollToTop from './ScrollToTop';
import TestPage from './routes/TestPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop>
                    <Header />
                        <div id="wrapper">
                            <Switch>
                                <Route component={MainPage} path="/" exact />
                                <Route component={ProductPage} path="/product/:id" exact />

                                <Route component={CatalogPage} path="/catalog/" exact/>
                                <Route component={CatalogPage} path="/catalog/:category/" exact/>
                                <Route component={CatalogPage} path="/catalog/:category/:title/min/:min/max/:max/order/:order/pageNumber/:pageNumber" exact/>
                                <Route component={CatalogPage} path="/search/title/:title?" exact></Route>
                                
                                <Route component={DeliveryPage} path="/delivery" />
                                <Route component={ContactsPage} path="/contacts" />
                                <Route component={WarrantyPage} path="/warranty" />
                                <Route component={BusinessPage} path="/business" />
                                <Route component={ReturnPage} path="/return" />

                                <Route component={CheckoutPage} path="/checkout" />
                                <Route component={ThanksPage} path="/order/:id" />
                                <Route component={TestPage} path="/test" />

                            </Switch>
                        </div>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </>
    );
}

export default App;
