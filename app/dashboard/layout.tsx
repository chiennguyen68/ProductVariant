import React from "react";

// components

import AdminNavbar from "@/components/dashboard/Navbars/AdminNavbar";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import HeaderStats from "@/components/dashboard/Headers/HeaderStats";
import FooterAdmin from "@/components/dashboard/Footers/FooterAdmin";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      {/* <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div> */}
    </>
  );
}
