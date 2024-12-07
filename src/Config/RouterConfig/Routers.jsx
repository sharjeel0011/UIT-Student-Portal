import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../Screens/Home/Home'
import StudentSignUpScreen from '../../Screens/AccountCrr/Accountcrr';
import LoginScreen from '../../Screens/Login/Login';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import StudentPortal from '../../Screens/StudentPortal/StudentPortal';
import Protected from '../../Components/StudentPortalPage/Protected';
import Coursfee from '../../Components/StudentPortalPage/CoursFee'
const Router = () => {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home />} />
<Route path='Studentportal' element={<Protected><StudentPortal/></Protected>} />
<Route path='coursfee' element={<Protected><Coursfee/></Protected>} />
<Route path='Signup' element={<StudentSignUpScreen/>} />
<Route path='login' element={<LoginScreen/>} />
</Routes>
<Footer/>
</BrowserRouter>


</>
  )
}

export default Router