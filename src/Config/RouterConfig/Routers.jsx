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
import HomePortal from '../../Screens/StudentPortal/Home'
import ExamScreen from '../../Screens/StudentPortal/Exam';
import OnlineLectures from '../../Screens/StudentPortal/OnlineLectures';
import PaidVideoSection from'../../Screens/StudentPortal/PaidVideoSection'
import TextBooks from '../../Screens/StudentPortal/TextBook';
import Profile from '../../Screens/StudentPortal/ProfileDetails';
const Router = () => {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home />} />
<Route path='Studentportal' element={<Protected><StudentPortal/></Protected>} />
<Route path='home' element={<Protected><HomePortal/></Protected>} />
<Route path='payments' element={<Protected><Coursfee/></Protected>} />
<Route path='onlinelectures' element={<Protected><OnlineLectures/></Protected>} />
<Route path='PaidonlineLectures' element={<Protected><PaidVideoSection/></Protected>} />
<Route path='profile' element={<Protected><Profile/></Protected>} />
<Route path='textbookdownload' element={<Protected><TextBooks/></Protected>} />
<Route path='exam' element={<Protected><ExamScreen/></Protected>} />
<Route path='Signup' element={<StudentSignUpScreen/>} />
<Route path='login' element={<LoginScreen/>} />
</Routes>
{/* <Footer/> */}
</BrowserRouter>


</>
  )
}

export default Router