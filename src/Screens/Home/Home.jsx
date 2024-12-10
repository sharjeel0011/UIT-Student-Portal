// import React from 'react'
// import HeroSection from '../../Components/HomePage/Hero'
// import AvailablePrograms from '../../Components/HomePage/AvailabelPrograms'
// import YouTubeSeries from '../../Components/HomePage/YoutubeSeries'
// const Home = () => {
//   return (
// <>
// <div className=''>
// <HeroSection/>
// <AvailablePrograms/>
// <YouTubeSeries/>
// </div>
// </>
//   )
// }

// export default Home










import React from "react";
import HeroSection from "../../Components/HomePage/Hero";
import AvailablePrograms from "../../Components/HomePage/AvailabelPrograms";
import YouTubeSeries from "../../Components/HomePage/YoutubeSeries";
import { courses } from "../../assets/Data"; 

const Home = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        <AvailablePrograms courses={courses} /> 
        <YouTubeSeries />
      </div>
    </>
  );
};

export default Home;
