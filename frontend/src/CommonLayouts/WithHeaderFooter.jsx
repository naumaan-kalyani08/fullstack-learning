import React from "react";
import PageHeader from "../components/PageHeader";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const WithHeaderFooter = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default WithHeaderFooter;
