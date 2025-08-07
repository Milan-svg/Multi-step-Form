import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
function AdminLayout() {
  return (
    <div className="flex min-h-screen mt-4">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
