import Sidebar from "@/components/Sidebar";
import React, { Children } from "react";

const DashboardLayout = ({children}) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
