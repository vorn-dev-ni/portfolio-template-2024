import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
