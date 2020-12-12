import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/styles/styles.scss';

import Header from './assets/components/header';
import Footer from './assets/components/footer';

import MainPage from './routes/MainPage';
import ProductPage from './routes/ProductPage';
import CatalogPage from './routes/CatalogPage';
import DeliveryPage from './routes/DeliveryPage';
import ContactsPage from './routes/ContactsPage';
import WarrantyPage from './routes/WarrantyPage';
import BusinessPage from './routes/BusinessPage';
import CheckoutPage from './routes/CheckoutPage';
import ThanksPage from './routes/ThanksPage';

function App() {
    return (
        <>
                <BrowserRouter>
                    <Header />
                        <div id="wrapper">
                            <Switch>
                                <Route component={MainPage} path="/" exact />
                                <Route component={ProductPage} path="/product" />
                                <Route component={CatalogPage} path="/catalog" />

                                <Route component={DeliveryPage} path="/delivery" />
                                <Route component={ContactsPage} path="/contacts" />
                                <Route component={WarrantyPage} path="/warranty" />
                                <Route component={BusinessPage} path="/business" />

                                <Route component={CheckoutPage} path="/checkout" />
                                <Route component={ThanksPage} path="/thanks" />
                            </Switch>
                        </div>
                    <Footer />
                </BrowserRouter>
        </>
    );
}

export default App;
