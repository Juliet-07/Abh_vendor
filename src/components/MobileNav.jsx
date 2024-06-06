import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import DashboardIcon from "../assets/dashboard.svg";
import OrdersIcon from "../assets/orders.svg";
import InventoryIcon from "../assets/inventory.svg";
import AnalyticsIcon from "../assets/analytics.svg";
import {
  Menu,
  MenuItems,
  MenuButton,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { IoPersonSharp } from "react-icons/io5";

const MobileNavigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const Menus = [
    {
      title: "Dashboard",
      icon: <img src={DashboardIcon} />,
      path: "/dashboard/home",
    },
    {
      title: "Orders",
      icon: <img src={OrdersIcon} />,
      submenu: true,
      submenuItems: [
        { title: "All Orders", path: "/dashboard/allOrders" },
        { title: "Track Orders", path: "/dashboard/trackOrders" },
      ],
    },
    {
      title: "Inventory",
      icon: <img src={InventoryIcon} />,
      submenu: true,
      submenuItems: [
        { title: "My Products", path: "/forms/all-products" },
        { title: "Draft Products", path: "/forms/draft-products" },
        { title: "Discount", path: "/forms/inventory" },
      ],
    },
    {
      title: "Analytics",
      icon: <img src={AnalyticsIcon} />,
      path: "/dashboard/analytics",
    },
  ];

  const activeLink =
    "mx-4 flex justify-start items-center text-[#373435] text-xl space-x-1 font-primaryRegular bg-[#F1FAF2] rounded-xl";

  const activeSubLink =
    "mx-4 flex justify-start items-center text-[#359E52] text-sm space-x-1 font-primarySemibold rounded-xl";

  const normalLink =
    "mt-3 mx-4 flex justify-start items-center space-x-1 font-primaryRegular text-[#373435]";

  const SidebarLinks = ({ menu, index }) => {
    return (
      <>
        {menu.submenu ? (
          <div className={normalLink} onClick={() => toggleSubmenu(index)}>
            <li
              className={`flex items-center gap-x-2 cursor-pointer p-3 hover:text-[#359E52] hover:font-primaryBold rounded-md mt-2 ${
                menu.spacing ? "mt-10" : "mt-0"
              }`}
            >
              <span className="text-xl block float-left">{menu.icon}</span>
              <span className="text-sm font-medium duration-200">
                {menu.title}
              </span>
              <BsChevronDown
                className={`ml-auto transition-transform ${
                  submenuOpen[index] && "rotate-180"
                }`}
              />
            </li>
          </div>
        ) : (
          <NavLink
            to={menu.path}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <li
              className={`flex items-center gap-x-2 cursor-pointer p-3 hover:text-[#359E52] hover:font-primaryBold rounded-md mt-2 ${
                menu.spacing ? "mt-10" : "mt-0"
              }`}
            >
              <span className="text-xl block float-left">{menu.icon}</span>
              <span className="text-sm font-medium duration-200">
                {menu.title}
              </span>
            </li>
          </NavLink>
        )}
        {menu.submenu && submenuOpen[index] && (
          <ul className="ml-6">
            {menu.submenuItems.map((submenuItem, subIndex) => (
              <NavLink
                key={subIndex}
                to={submenuItem.path}
                className={({ isActive }) =>
                  isActive ? activeSubLink : normalLink
                }
              >
                <li className="flex items-center gap-x-2 cursor-pointer p-2 hover:text-[#359E52] hover:font-primaryRegular rounded-md">
                  <span className="text-sm font-medium">
                    {submenuItem.title}
                  </span>
                </li>
              </NavLink>
            ))}
          </ul>
        )}
      </>
    );
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-full md:hidden flex justify-between items-center h-[70px] mx-auto px-4 md:px-10 2xl:px-20 text-gray-600 fixed z-10 bg-white">
      {/* toggle and logo */}
      <div className="flex items-center">
        <div onClick={handleNav} className="mr-3">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <Logo className="w-[130px]" />
      </div>

      {/* Mobile hamburger */}
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-[60px] w-[414px] h-[532px] ease-in-out duration-500 bg-white z-10"
            : "fixed left-[-100%]"
        }
      >
        <div className="sidebar-scrollbar h-full w-full overflow-x-hidden">
          <ul>
            {Menus.map((menu, index) => (
              <SidebarLinks key={index} menu={menu} index={index} />
            ))}
          </ul>
        </div>
      </div>
      {/* search icon and profile */}
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="flex rounded-full text-sm focus:outline-none">
            <span className="sr-only">Open user menu</span>
            <div className="bg-gray-200 w-12 h-12 text-2xl text-black text-center p-2 rounded-full mx-4 my-2 flex items-center justify-center">
              <IoPersonSharp size={20} />
            </div>
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-primaryRegular">
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Your Profile
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Settings
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={logout}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Logout
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default MobileNavigation;
