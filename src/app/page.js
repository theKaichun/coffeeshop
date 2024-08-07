"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navber";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
