import React from 'react';
import {NavLink} from "react-router-dom";
import '../Styles/Navigation.scss';

const navList = [
    {name:'start', path:'/', exact: true},
    {name:'produkty', path:'/products'},
    {name:'kontakt', path:'/contact'},
    {name:'ćwiczenia css', path:'/css'},
    {name:'panel admina', path:'/admin'},
];

const Navigation = () => {

    const navMenu = navList.map(({ name, path, exact }) => (
        <li key={ name }>
            <NavLink to={ path } exact={exact || false} >{ name }</NavLink>
        </li>
    ));

    return (
        <nav className="main">
            <ul>{ navMenu }</ul>
        </nav>
    );
};

export default Navigation;
