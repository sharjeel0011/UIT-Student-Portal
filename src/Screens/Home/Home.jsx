

// import React from "react";
// import Footer from "../../Components/Footer";
// import HeroSection from "../../Components/HomePage/Hero";
// import AvailablePrograms from "../../Components/HomePage/AvailabelPrograms";
// import YouTubeSeries from "../../Components/HomePage/YoutubeSeries";
// import { courses } from "../../assets/Data"; 
// import Navbar from "../../Components/Navbar";

// const Home = () => {
//   return (
//     <>
//       <div className="">
//         <Navbar/>
//         <HeroSection />
//         <AvailablePrograms courses={courses} /> 
//         <YouTubeSeries />
//         <Footer/>
//       </div>
//     </>
//   );
// };

// export default Home;

















import React from "react";
import Footer from "../../Components/Footer";
import HeroSection from "../../Components/HomePage/Hero";
import AvailablePrograms from "../../Components/HomePage/AvailabelPrograms";
import YouTubeSeries from "../../Components/HomePage/YoutubeSeries";
import { courses } from "../../assets/Data"; 
import Navbar from "../../Components/Navbar";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="relative top-0 pt-[64px] md:pt-[72px]">
          <HeroSection />
        </div>

        {/* Other Sections */}
        <AvailablePrograms courses={courses} /> 
        <YouTubeSeries />
        <Footer />
      </div>
    </>
  );
};

export default Home;
