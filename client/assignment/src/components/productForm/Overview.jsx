import React, { useState } from "react";
import { useSelector } from "react-redux";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

function Overview() {
  const [view, setView] = useState("desktop");
  const existingForm = useSelector((s) => s.productForm);
  console.log("form: ", existingForm);
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          className={`btn ${
            view === "desktop" ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => setView("desktop")}
        >
          Desktop View
        </button>
        <button
          className={`btn ${view === "mobile" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setView("mobile")}
        >
          Mobile View
        </button>
      </div>
      {view === "desktop" ? (
        <DesktopView existingForm={existingForm} />
      ) : (
        <MobileView existingForm={existingForm} />
      )}
    </div>
  );
}

export default Overview;
