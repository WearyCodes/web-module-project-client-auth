import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate  = useNavigate()
    const [cred, setCred] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cred)
        axios.post('http://localhost:9000/api/login', cred)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            navigate('/friends')
        })
        .catch(
            err => {console.log(err)}
        )
    }

    return (<div className="center-container">
      <div><h1>Login</h1></div>
      <form onSubmit = {handleSubmit}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input id='username' name = 'username' onChange = {handleChange}></input>
          <label htmlFor='password'>Password: </label>
          <input name = 'password' id='password' onChange = {handleChange}></input>
          <button>Submit</button>
        </div>
      </form>
    </div>)
  }

  export default Login