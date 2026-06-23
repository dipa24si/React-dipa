import {
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaPlus,
  FaExclamationTriangle,
  FaCubes,
  FaRegStickyNote,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/useAuth";

export default function Sidebar() {
  const [expandErrorMenu, setExpandErrorMenu] = useState(false);
  const { isAdmin } = useAuth();
  const basePath = isAdmin ? "/admin" : "/member";

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col mb-10">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          {isAdmin ? "Modern Admin Dashboard" : "Member Dashboard"}
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mb-10">
        <ul id="menu-list" className="space-y-3">
          <li id="menu-1">
            <NavLink to={basePath} className={menuClass}>
              <FaHome className="text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li id="menu-2">
            <NavLink to={`${basePath}/orders`} className={menuClass}>
              <FaShoppingCart className="text-xl" />
              <span>Orders</span>
            </NavLink>
          </li>
          {isAdmin && (
            <li id="menu-3">
              <NavLink to="/admin/customers" className={menuClass}>
                <FaUsers className="text-xl" />
                <span>Customers</span>
              </NavLink>
            </li>
          )}
          <li id="menu-4">
            <NavLink to={`${basePath}/products`} className={menuClass}>
              <FaPlus className="text-xl" />
              <span>Products</span>
            </NavLink>
          </li>
          {isAdmin && (
            <>
              <li id="menu-5">
                <NavLink to="/admin/components" className={menuClass}>
                  <FaCubes className="text-xl" />
                  <span>Components</span>
                </NavLink>
              </li>
              <li id="menu-6">
                <NavLink to="/admin/notes" className={menuClass}>
                  <FaRegStickyNote className="text-xl" />
                  <span>Notes</span>
                </NavLink>
              </li>
              <li id="menu-7">
                <NavLink to="/admin/fitur-xyz" className={menuClass}>
                  <FaCubes className="text-xl" />
                  <span>Fitur XYZ</span>
                </NavLink>
              </li>
            </>
          )}

          {/* Error Pages Menu */}
          {isAdmin && (
          <li id="menu-8">
            <div
              onClick={() => setExpandErrorMenu(!expandErrorMenu)}
              className="flex cursor-pointer items-center rounded-xl p-4 space-x-2 text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
            >
              <FaExclamationTriangle className="text-xl" />
              <span>Error Pages</span>
            </div>

            {/* Submenu */}
            {expandErrorMenu && (
              <ul className="mt-2 ml-4 space-y-2 pl-2 border-l-2 border-hijau">
                <li>
                  <NavLink
                    to="/admin/error/400"
                    className="flex items-center rounded-lg p-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <span>Error 400 (Bad Request)</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/error/401"
                    className="flex items-center rounded-lg p-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                  >
                    <span>Error 401 (Unauthorized)</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/error/403"
                    className="flex items-center rounded-lg p-3 text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                  >
                    <span>Error 403 (Forbidden)</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          )}
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center gap-4"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <FaPlus className="text-gray-600" />
              <span className="text-gray-600">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-20 rounded-full object-cover"
            src="/img/profil.jpg"
            alt="Avatar"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          {isAdmin ? "Sedap Restaurant Admin Dashboard" : "Sedap Restaurant Member Dashboard"}
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
