import React from "react";

function NavBar() {
  return (
    <div className="navbar justify-between bg-white shadow-md">
      <div className=" flex flex-row justify-center items-center space-x-2">
        <img src="/images/logo.png" alt="Amrutam Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold text-green-800">AMRUTAM</h1>
      </div>
      <div className="">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-content rounded-box z-1 mt-3 w-52 p-2 bg-accent"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge bg-bas">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
