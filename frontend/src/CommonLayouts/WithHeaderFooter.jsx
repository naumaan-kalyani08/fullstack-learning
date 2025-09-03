import React from "react";
import PageHeader from "../components/PageHeader";
import { Outlet } from "react-router";

const WithHeaderFooter = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
};

export default WithHeaderFooter;
