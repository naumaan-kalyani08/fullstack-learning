import React, { useState } from "react";
import { Layout } from "antd";
import { Link } from "react-router";
import DrawerComponent from "./Drawer";

const { Header } = Layout;

const PageHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Header className="!bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-800">My App</div>
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
          <button onClick={toggleDrawer}>Menu</button>
        </div>
      </Header>
      <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};

export default PageHeader;
