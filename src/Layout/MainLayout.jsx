import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#081613] text-white overflow-hidden">
      <header>
        <Navbar />
      </header>

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1"
      >
        <Outlet />
      </motion.div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
