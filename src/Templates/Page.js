import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "../Views/HomePage";
import ContactPage from "../Views/ContactPage";
import AdminPage from "../Views/AdminPage";
import NotFoundPage from "../Views/NotFoundPage";
import LoginPage from "../Views/LoginPage";
import ProductsListPage from "../Views/ProductsListPage";
import ProductPage from "../Views/ProductPage";
import CssPage from "../Views/CssPage";


const Page = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/products" component={ProductsListPage}/>
            <Route path="/product/:name" component={ProductPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/admin" component={AdminPage}/>
            <Route path="/css" component={CssPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    );
};

export default Page;
