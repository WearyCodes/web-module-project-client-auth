import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';


// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (<div className="center-container">
        <h2>Friends List</h2>
        <ul>
            {
                friends.map(friend => {
                    return <li>{friend.name} - {friend.age} - {friend.email}</li>
                })
            }

        </ul>
    </div>)
}

export default FriendsList