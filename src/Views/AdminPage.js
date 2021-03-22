import React from 'react';
import {Route, Redirect} from "react-router-dom";

const permission = false; //NOTE: symulacja.. xd

const AdminPage = () => {
    return (
        <Route
            render={
                ()=> permission ?
                    <h2>Panel admina.</h2> :
                    <Redirect to="/login"/>
            }
        />
    );
}
export default AdminPage;
