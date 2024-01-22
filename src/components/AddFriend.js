import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddFriend = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', user, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            navigate('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (<div className="center-container">
        <h2>Add Friend</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input onChange={handleChange} name='name' id='name'></input>
                <label htmlFor='age'>Age</label>
                <input onChange={handleChange} name='age' id='age'></input>
                <label htmlFor='email'>Email</label>
                <input onChange={handleChange} name='email' id='email'></input>
                <button>Submit</button>
            </div>

        </form>
    </div>)
}

export default AddFriend