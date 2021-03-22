import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom'
import '../Styles/Header.scss';

const HeaderImage = ({imgId}) => {
    console.log(imgId);
    return (
        <img src={`https://picsum.photos/1700/300?${imgId}`} alt="header"/>
    );
}


const Header = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact render={()=><HeaderImage imgId={1}/>}/>
                <Route path="/products" render={()=><HeaderImage imgId={2}/>}/>
                <Route path="/contact" render={()=><HeaderImage imgId={3}/>}/>
                <Route path="/admin" render={()=><HeaderImage imgId={4}/>}/>
                <Route render={()=><HeaderImage imgId={5}/>}/>/>
            </Switch>
        </Fragment>
    );
};

export default Header;
