

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
      <div className="">
        <Navbar/>
        <HeroSection />
        <AvailablePrograms courses={courses} /> 
        <YouTubeSeries />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
