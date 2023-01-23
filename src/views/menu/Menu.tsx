import Col from "../../components/layouts/Col";
import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import React from "react";
import Login from "../auth/Login";

function Menu() {
    return <Col>
        <Link to={'/login'}>Login</Link>
        <Outlet/>
    </Col>
}

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Menu/>
    },
    {
        path: 'login',
        element: <Login/>
    }
]);
