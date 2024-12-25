// import React from 'react'
// import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from '../../Screens/Home/Home'
// import StudentSignUpScreen from '../../Screens/AccountCrr/Accountcrr';
// import LoginScreen from '../../Screens/Login/Login';
// import Navbar from '../../Components/Navbar';
// import Footer from '../../Components/Footer';
// import StudentPortal from '../../Screens/StudentPortal/StudentPortal';
// import Protected from '../../Components/StudentPortalPage/Protected';
// import Coursfee from '../../Components/StudentPortalPage/CoursFee'
// import HomePortal from '../../Screens/StudentPortal/Home'
// import ExamScreen from '../../Screens/StudentPortal/Exam';
// import OnlineLectures from '../../Screens/StudentPortal/OnlineLectures';
// import PaidVideoSection from'../../Screens/StudentPortal/PaidVideoSection'
// import TextBooks from '../../Screens/StudentPortal/TextBook';
// import Profile from '../../Screens/StudentPortal/ProfileDetails';
// import Notifications from '../../Screens/StudentPortal/Notification';
// import CourseDetail from '../../Screens/CourseDetailPage/CourseDetail';
// import { courses } from '../../assets/Data';
// import AvailablePrograms from '../../Components/HomePage/AvailabelPrograms';
// import AdmissionForm from '../../Screens/AdmissionForm/Admission';
// import HomeAdmin from '../../Screens/Adminportal.jsx/AdminportalHome';
// import AdminLogin from '../../Screens/Adminportal.jsx/AdminLogin';
// import AdminSignup from '../../Screens/Adminportal.jsx/SignupLogin';
// import VideoAdmin from '../../Screens/Adminportal.jsx/VideoSection'
// import TextAdmin from '../../Screens/Adminportal.jsx/TextbookScreen'
// import AddCourse from '../../Screens/Adminportal.jsx/AddCourse';
// import AddNotfaction from '../../Screens/Adminportal.jsx/AddNotifaction';
// import UploadYouTubeVideos from '../../Screens/Adminportal.jsx/UploadYoutubeVideosPublic';
// import CourseDetails from '../../Screens/Adminportal.jsx/CourseDashboard'
// import StudentDetails from '../../Screens/Adminportal.jsx/StudentsDetails';
// const Router = () => {
//   return (
// <>
// <BrowserRouter>
// {/* <Navbar/> */}
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path='Studentportal' element={<StudentPortal/>} />
// <Route path='Coursesdetails' element={<CourseDetails courses={courses} />} />
// <Route path='StudentDetails' element={<StudentDetails/>} />
// <Route path='adminPortal019' element={<HomeAdmin/>} />
// <Route path='Videoadmin' element={<VideoAdmin/>} />
// <Route path='textadmin' element={<TextAdmin/>} />
// <Route path='publicytvideos' element={<UploadYouTubeVideos/>} />
// <Route path='addcourse' element={<AddCourse/>} />
// <Route path='addnotifaction' element={<AddNotfaction/>} />
// <Route path='admissionform' element={<AdmissionForm courses={courses} />} />
// <Route path="availabelprograms" element={<AvailablePrograms courses={courses} />} />
// <Route path="/courses/:courseId" element={<CourseDetail courses={courses} />} />
// <Route path='home' element={<Protected><HomePortal/></Protected>} />
// <Route path='payments' element={<Protected><Coursfee/></Protected>} />
// <Route path='onlinelectures' element={<Protected><OnlineLectures/></Protected>} />
// <Route path='PaidonlineLectures' element={<Protected><PaidVideoSection/></Protected>} />
// <Route path='profile' element={<Protected><Profile/></Protected>} />
// <Route path='textbookdownload' element={<Protected><TextBooks/></Protected>} />
// <Route path='exam' element={<Protected><ExamScreen/></Protected>} />
// <Route path='notification' element={<Protected><Notifications/></Protected>} />
// <Route path='loginadmin' element={<AdminLogin/>} />
// <Route path='signupadmin' element={<AdminSignup/>} />
// <Route path='Signup' element={<StudentSignUpScreen/>} />
// <Route path='login' element={<LoginScreen/>} />
// </Routes>
// {/* <Footer/> */}
// </BrowserRouter>


// </>
//   )
// }

// export default Router
















import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../Screens/Home/Home';
import StudentSignUpScreen from '../../Screens/AccountCrr/Accountcrr';
import LoginScreen from '../../Screens/Login/Login';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import StudentPortal from '../../Screens/StudentPortal/StudentPortal';
import Protected from '../../Components/StudentPortalPage/Protected';
import AdminProtected from '../../Components/Admincomponents/AdminProtected';
import Coursfee from '../../Components/StudentPortalPage/CoursFee';
import HomePortal from '../../Screens/StudentPortal/Home';
import ExamScreen from '../../Screens/StudentPortal/Exam';
import OnlineLectures from '../../Screens/StudentPortal/OnlineLectures';
import PaidVideoSection from '../../Screens/StudentPortal/PaidVideoSection';
import TextBooks from '../../Screens/StudentPortal/TextBook';
import Profile from '../../Screens/StudentPortal/ProfileDetails';
import Notifications from '../../Screens/StudentPortal/Notification';
import CourseDetail from '../../Screens/CourseDetailPage/CourseDetail';
import { courses } from '../../assets/Data';
import AvailablePrograms from '../../Components/HomePage/AvailabelPrograms';
import AdmissionForm from '../../Screens/AdmissionForm/Admission';
import HomeAdmin from '../../Screens/Adminportal.jsx/AdminportalHome';
import AdminLogin from '../../Screens/Adminportal.jsx/AdminLogin';
import AdminSignup from '../../Screens/Adminportal.jsx/SignupLogin';
import VideoAdmin from '../../Screens/Adminportal.jsx/VideoSection';
import TextAdmin from '../../Screens/Adminportal.jsx/TextbookScreen';
import AddCourse from '../../Screens/Adminportal.jsx/AddCourse';
import AddNotfaction from '../../Screens/Adminportal.jsx/AddNotifaction';
import UploadYouTubeVideos from '../../Screens/Adminportal.jsx/UploadYoutubeVideosPublic';
import CourseDetails from '../../Screens/Adminportal.jsx/CourseDashboard';
import StudentDetails from '../../Screens/Adminportal.jsx/StudentsDetails';
import CoursesAction from '../../Screens/Adminportal.jsx/CoursesActions'
// Import the IDCard Component
import IDCard from '../../Components/StudentPortalPage/GetIdCard';
import ForgotPasswordScreen from '../../Screens/Forgotpass';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Studentportal" element={<StudentPortal />} />
          <Route path="Coursesdetails" element={<AdminProtected><CourseDetails courses={courses} /></AdminProtected>} />
          <Route path="coursesaction" element={<AdminProtected><CoursesAction  /></AdminProtected>} />
          <Route path="StudentDetails" element={<AdminProtected><StudentDetails /></AdminProtected>} />
          <Route path="adminPortal019" element={<AdminProtected><HomeAdmin /></AdminProtected>} />
          <Route path="Videoadmin" element={<AdminProtected><VideoAdmin /></AdminProtected>} />
          <Route path="textadmin" element={<AdminProtected><TextAdmin /></AdminProtected>} />
          <Route path="publicytvideos" element={<AdminProtected><UploadYouTubeVideos /></AdminProtected>} />
          <Route path="addcourse" element={<AdminProtected><AddCourse /></AdminProtected>} />
          <Route path="addnotifaction" element={<AdminProtected><AddNotfaction /></AdminProtected>} />
          <Route path="admissionform" element={<AdmissionForm courses={courses} />} />
          <Route path="availabelprograms" element={<AvailablePrograms courses={courses} />} />
          <Route path="/courses/:courseId" element={<CourseDetail courses={courses} />} />
          <Route path="home" element={<Protected><HomePortal /></Protected>} />
          <Route path="payments" element={<Protected><Coursfee /></Protected>} />
          <Route path="onlinelectures" element={<Protected><OnlineLectures /></Protected>} />
          <Route path="/player/:id" element={<Protected><PaidVideoSection /></Protected>} />
          <Route path="profile" element={<Protected><Profile /></Protected>} />
          <Route path="textbookdownload" element={<Protected><TextBooks /></Protected>} />
          <Route path="exam" element={<Protected><ExamScreen /></Protected>} />
          <Route path="notification" element={<Protected><Notifications /></Protected>} />
          <Route path="loginadmin" element={<AdminLogin />} />
          <Route path="signupadmin" element={<AdminSignup />} />
          <Route path="Signup" element={<StudentSignUpScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="forgotpassword" element={<ForgotPasswordScreen />} />

          {/* Add the new route for the IDCard page */}
          <Route path="id-card" element={<IDCard />} /> {/* New route for IDCard */}

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
};

export default Router;








