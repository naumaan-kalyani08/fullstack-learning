import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Header className="!bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-semibold text-gray-800">My App</div>
      {/* You can add navigation or actions here */}
      <div className="space-x-4">
        <button className="text-gray-700 hover:text-blue-500">Home</button>
        <button className="text-gray-700 hover:text-blue-500">About</button>
        <button className="text-gray-700 hover:text-blue-500">Contact</button>
      </div>
    </Header>
  );
};

export default PageHeader;
