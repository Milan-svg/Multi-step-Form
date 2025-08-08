import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-base-300 p-6 rounded-xl shadow-2xl flex flex-col ">
      <div className="mb-8 text-2xl font-semibold text-center">Menu</div>
      <ul className="menu space-y-2 text-base">
        <li>
          <a className="text-lg font-semibold">Dashboard</a>
        </li>
        <li>
          <a className="text-lg font-semibold">Doctors</a>
        </li>
        <li className="bg-base-100 rounded-xl  font-semibold">
          <details open>
            <summary className="text-lg font-semibold">Product</summary>
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
          <a className="text-lg font-semibold">Patients</a>
        </li>
        <li>
          <a className="text-lg font-semibold">Appointments</a>
        </li>
        <li>
          <a className="text-lg font-semibold">Specialities</a>
        </li>
        <li>
          <a className="text-lg font-semibold">Coupons</a>
        </li>
        <li>
          <a className="text-lg font-semibold">Concerns</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
