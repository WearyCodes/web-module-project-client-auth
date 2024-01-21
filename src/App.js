import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

const Login = () => {
  return (<h2>Login</h2>)
}

const FriendsList = () => {
  return (<h2>FriendsList</h2>)
}

const AddFriend = () => {
  return (<h2>AddFriend</h2>)
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Navigate to='/'/>}> </Route>
        <Route path='/friends' element={<FriendsList />} />
        <Route path='/friends/add' element={<AddFriend />} />
      </Routes>
    </Router>
  );
}

export default App;
