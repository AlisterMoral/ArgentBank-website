
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import SignIn from './pages/SignIn';
import '@fortawesome/fontawesome-free/css/all.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserProfileSuccess } from './actions/userActions';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      dispatch(updateUserProfileSuccess(userInfo));
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
