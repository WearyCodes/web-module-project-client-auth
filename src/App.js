import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Friends DataBase</h1>
          <Link className='link' to='/login'>Login</Link>
          <Link className='link' to='/friends'>Friends</Link>
          <Link className='link' to='/friends/add'>Add Friend</Link>
          <Link className='link' to='/logout'>Logout</Link>
        </header>
      <Routes>
        {localStorage.getItem('token') && <Route path='/friends' element = {< FriendsList/>}/>}
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Navigate to='/' />}> </Route>
        <Route path='/friends/add' element={<AddFriend />} />
        <Route path='/logout' element={<Logout />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
