import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { resetForm } from "./productFormSlice";

function Overview({ handleSubmit }) {
  const [view, setView] = useState("desktop");
  const existingForm = useSelector((s) => s.productForm);
  //console.log("form: ", existingForm);
  const dispatch = useDispatch();

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
        <DesktopView existingForm={existingForm} handleSubmit={handleSubmit} />
      ) : (
        <MobileView existingForm={existingForm} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default Overview;
