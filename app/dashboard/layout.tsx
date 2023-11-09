import React from "react";

// components

import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import HeaderStats from "@/components/dashboard/Headers/HeaderStats";
import AdminNavbar from "@/components/dashboard/Navbars/AdminNavbar";

export default function Admin({ children }: any) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">{children}</div>
      </div>
    </>
  );
}
