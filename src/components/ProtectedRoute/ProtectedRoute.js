import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
    return (
        <Route path={props.path}>
            {
                () => props.user.name ? props.children : <Redirect to="/" />
            }
        </Route>
    )
}

export default ProtectedRoute;