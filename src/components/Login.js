import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


const Login = () => {
    return (<div className="center-container">
      <div><h1>Login</h1></div>
      <form>
        <div>
          <label htmlFor='username'>Username: </label>
          <input id='username'></input>
          <label htmlFor='password'>Password: </label>
          <input id='password'></input>
          <button>Submit</button>
        </div>
      </form>
    </div>)
  }

  export default Login