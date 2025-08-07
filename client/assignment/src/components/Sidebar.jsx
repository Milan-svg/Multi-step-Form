import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white p-6 shadow-md flex flex-col">
      <div className="mb-8 text-xl font-semibold text-center">Menu</div>
      <ul className="menu space-y-2 text-base">
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Doctors</a>
        </li>
        <li className="bg-green-100 rounded-lg text-green-700 font-semibold">
          <details open>
            <summary>Product</summary>
            <ul className="pl-4 mt-2 space-y-1 text-sm font-normal text-black">
              <li>
                <Link to="/products">Product List</Link>
              </li>

              <li>
                <Link to="/products/add">Add a Product</Link>
              </li>
            </ul>
          </details>
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
