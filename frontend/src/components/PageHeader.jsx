import React from "react";
import { Layout } from "antd";
import { Link } from "react-router";

const { Header } = Layout;
const PageHeader = () => {
  return (
    <Header className="!bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-semibold text-gray-800">My App</div>
      {/* You can add navigation or actions here */}
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500">
          About
        </Link>
        <Link to="/contact-us" className="text-gray-700 hover:text-blue-500">
          Contact
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-500">
          Logout
        </Link>
      </div>
    </Header>
  );
};

export default PageHeader;
