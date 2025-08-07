import React from "react";

// A simplified sidebar using DaisyUI's Menu component
function Sidebar() {
  return (
    <aside className="w-64 bg-white p-4 shadow-md">
      <div className="mb-8 flex items-center gap-2">
        <a>Menu</a>
      </div>
      <ul className="menu space-y-2 text-base">
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Doctors</a>
        </li>
        {/* Use 'active' class for the current page */}
        <li className="bg-green-100 rounded-lg text-green-700 font-semibold">
          <a>Product</a>
        </li>
        <li>
          <a>Patients</a>
        </li>
        <li>
          <a>Appointments</a>
        </li>
        <li>
          <a>Specialities</a>
        </li>
        <li>
          <a>Coupons</a>
        </li>
        <li>
          <a>Concerns</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
