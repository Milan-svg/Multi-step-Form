import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen mt-4">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
}

export default AdminLayout;
