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
import Notifications from '../../Screens/StudentPortal/Notification';
import CourseDetail from '../../Screens/CourseDetailPage/CourseDetail';
import { courses } from '../../assets/Data';
import AvailablePrograms from '../../Components/HomePage/AvailabelPrograms';
import AdmissionForm from '../../Screens/AdmissionForm/Admission';
import HomeAdmin from '../../Screens/Adminportal.jsx/AdminportalHome';
import AdminLogin from '../../Screens/Adminportal.jsx/AdminLogin';
import AdminSignup from '../../Screens/Adminportal.jsx/SignupLogin';
import VideoAdmin from '../../Screens/Adminportal.jsx/VideoSection'
import TextAdmin from '../../Screens/Adminportal.jsx/TextbookScreen'
import AddCourse from '../../Screens/Adminportal.jsx/AddCourse';
import AddNotfaction from '../../Screens/Adminportal.jsx/AddNotifaction';
import UploadYouTubeVideos from '../../Screens/Adminportal.jsx/UploadYoutubeVideosPublic';
const Router = () => {
  return (
<>
<BrowserRouter>
{/* <Navbar/> */}
<Routes>
<Route path="/" element={<Home />} />
<Route path='Studentportal' element={<StudentPortal/>} />
<Route path='adminPortal' element={<HomeAdmin/>} />
<Route path='Videoadmin' element={<VideoAdmin/>} />
<Route path='textadmin' element={<TextAdmin/>} />
<Route path='publicytvideos' element={<UploadYouTubeVideos/>} />
<Route path='addcourse' element={<AddCourse/>} />
<Route path='addnotifaction' element={<AddNotfaction/>} />
<Route path='admissionform' element={<AdmissionForm courses={courses} />} />
<Route path="availabelprograms" element={<AvailablePrograms courses={courses} />} />
<Route path="/courses/:courseId" element={<CourseDetail courses={courses} />} />
<Route path='home' element={<Protected><HomePortal/></Protected>} />
<Route path='payments' element={<Protected><Coursfee/></Protected>} />
<Route path='onlinelectures' element={<Protected><OnlineLectures/></Protected>} />
<Route path='PaidonlineLectures' element={<Protected><PaidVideoSection/></Protected>} />
<Route path='profile' element={<Protected><Profile/></Protected>} />
<Route path='textbookdownload' element={<Protected><TextBooks/></Protected>} />
<Route path='exam' element={<Protected><ExamScreen/></Protected>} />
<Route path='notification' element={<Protected><Notifications/></Protected>} />
<Route path='loginadmin' element={<AdminLogin/>} />
<Route path='signupadmin' element={<AdminSignup/>} />
<Route path='Signup' element={<StudentSignUpScreen/>} />
<Route path='login' element={<LoginScreen/>} />
</Routes>
{/* <Footer/> */}
</BrowserRouter>


</>
  )
}

export default Router
















// import React from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Home from '../../Screens/Home/Home';
// import StudentSignUpScreen from '../../Screens/AccountCrr/Accountcrr';
// import LoginScreen from '../../Screens/Login/Login';
// import Navbar from '../../Components/Navbar';
// import Footer from '../../Components/Footer';
// import StudentPortal from '../../Screens/StudentPortal/StudentPortal';
// import Protected from '../../Components/StudentPortalPage/Protected';
// import Coursfee from '../../Components/StudentPortalPage/CoursFee';
// import HomePortal from '../../Screens/StudentPortal/Home';
// import ExamScreen from '../../Screens/StudentPortal/Exam';
// import OnlineLectures from '../../Screens/StudentPortal/OnlineLectures';
// import PaidVideoSection from '../../Screens/StudentPortal/PaidVideoSection';
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
// import VideoAdmin from '../../Screens/Adminportal.jsx/VideoSection';
// import TextAdmin from '../../Screens/Adminportal.jsx/TextbookSection';

// // Layout Component
// const Layout = ({ children }) => {
//   const location = useLocation();

//   // Define the paths where the Navbar should not be displayed
//   const hideNavbarRoutes = [
//     '/Studentportal',
//     '/home',
//     '/payments',
//     '/onlinelectures',
//     '/PaidonlineLectures',
//     "Videoadmin",
//     'exam',
//     "notification",
//     "profile",
//     "textbookdownload"
//   ];

//   // Check if the current route is in the hideNavbarRoutes
//   const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

//   return (
//     <>
//       {!shouldHideNavbar && <Navbar />}
//       {children}
//       {!shouldHideNavbar && <Footer />}
//     </>
//   );
// };

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="Studentportal" element={<StudentPortal />} />
//           <Route path="adminPortal" element={<HomeAdmin />} />
//           <Route path="Videoadmin" element={<VideoAdmin />} />
//           <Route path="textadmin" element={<TextAdmin />} />
//           <Route path="admissionform" element={<AdmissionForm courses={courses} />} />
//           <Route path="availabelprograms" element={<AvailablePrograms courses={courses} />} />
//           <Route path="/courses/:courseId" element={<CourseDetail courses={courses} />} />
//           <Route path="home" element={<Protected><HomePortal /></Protected>} />
//           <Route path="payments" element={<Protected><Coursfee /></Protected>} />
//           <Route path="onlinelectures" element={<Protected><OnlineLectures /></Protected>} />
//           <Route path="PaidonlineLectures" element={<Protected><PaidVideoSection /></Protected>} />
//           <Route path="profile" element={<Protected><Profile /></Protected>} />
//           <Route path="textbookdownload" element={<Protected><TextBooks /></Protected>} />
//           <Route path="exam" element={<Protected><ExamScreen /></Protected>} />
//           <Route path="notification" element={<Protected><Notifications /></Protected>} />
//           <Route path="loginadmin" element={<AdminLogin />} />
//           <Route path="signupadmin" element={<AdminSignup />} />
//           <Route path="Signup" element={<StudentSignUpScreen />} />
//           <Route path="login" element={<LoginScreen />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// export default Router;
