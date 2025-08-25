import React from "react";
import PageHeader from "../components/PageHeader";

const WithHeaderFooter = ({ children }) => {
  return (
    <>
      <PageHeader />
      {children}
    </>
  );
};

export default WithHeaderFooter;
