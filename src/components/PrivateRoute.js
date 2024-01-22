import React, {useEffect} from "react";
import axios from "axios";
import { useNavigate, Navigate,  Route, Routes, Redirect } from "react-router-dom";
const PrivateRoute = ({component: Component, ...rest}) => {
    const navigate = useNavigate()
    return <div><Routes><Route {...rest} render={(props) => {
        if (localStorage.getItem('token')){
            return (<Component {...props}/>)
        } else {
            return <Navigate to ='/login'/>
        }
    }}/></Routes></div>
}

export default PrivateRoute