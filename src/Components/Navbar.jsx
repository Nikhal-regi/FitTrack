import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drawers z-30">
      {/* Drawer Toggle */}
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle z-10"
        checked={isOpen}
        onChange={toggleDrawer}
      />
      {/* Drawer Toggle Button */}
      {!isOpen && (
        <label
          htmlFor="my-drawer"
          className="btn btn-lg btn-circle btn-outline drawer-button"
          style={{
            position: "fixed",
            left: "-30px", // Adjust as per your requirement
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 9999,
          }}
        >
          {"-->"}
        </label>
      )}
      {/* Drawer Side */}
      <div className={`drawer-side ${isOpen ? "open" : "closed"} z-10`}>
        {/* Overlay (Static) */}
        <div
          className={`drawer-overlay ${isOpen ? "block" : "hidden"}`}
          onClick={toggleDrawer}
        ></div>
        {/* Drawer Menu */}
        <ul
          className={`z-10 menu p-4 w-80 min-h-full bg-base-200 text-base-content ${
            isOpen ? "open" : "closed"
          }`}
        >
          <li>
            <Link to="/" onClick={toggleDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/bar" onClick={toggleDrawer}>
              Chart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
