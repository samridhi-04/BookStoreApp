import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Route component
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider';
const App = () => {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
