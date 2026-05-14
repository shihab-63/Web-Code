import { Link, NavLink } from "react-router";
import logo from "../../assets/logos/logo.png";
import MyContainer from "../../Container/MyContainer";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
  ];

  const categorys = [
    { name: "Web Design", path: "/categorys/web-design" },
    { name: "App Development", path: "/category/app-dev" },
    { name: "UI/UX Design", path: "/category/ui-ux" },
    { name: "Digital Marketing", path: "/category/marketing" },
  ];

  const activeColor = ({ isActive }) =>
    isActive
      ? "bg-gray-200/70 hover:text-blue-800 text-blue-800 py-1.5 px-3 rounded"
      : "py-1.5 px-3 hover:text-blue-800";

  return (
    <>
      <MyContainer className={"py-4 flex justify-between items-center "}>
        {/* Logo Area! */}
        <Link className="flex items-center gap-2">
          <img src={logo} alt="Home Logo" />
          <h2 className="text-2xl font-supermercadoone md:text-3xl text-gray-600 font-semibold">
            Web<span>Code</span>
          </h2>
        </Link>

        {/* NavLink Area! */}
        <ul className="hidden md:flex items-center gap-5 transition-all duration-500">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink className={activeColor} to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))}
          {/* Category Area! */}
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 cursor-pointer hover:text-blue-500`}
            >
              Categorys{" "}
              <IoIosArrowDown
                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 mt-1" : "mt-1"}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <ul className="bg-white border border-gray-100 shadow-xl rounded-xl py-2">
                  {categorys.map((cat, i) => (
                    <li key={i}>
                      <NavLink
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                        to={cat.path}
                      >
                        {cat.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Button Area */}
        <div className="flex items-center gap-3">
          <Link to={"/login"} className="btn btn-success text-white md:px-8 ">
            Log In
          </Link>
          <Link to={"/"} className="btn btn-primary px-2 md:px-8 text-sm">
            Free To Trail
          </Link>

          <div onClick={() => setToggle(!toggle)} className="block md:hidden">
            {toggle ? <CiMenuBurger size={22} /> : <CiMenuFries size={22} />}
          </div>
        </div>
      </MyContainer>

      {/* Mobile Design */}
      <div className="md:hidden">
        {/* Black Overly */}
        <div>
          {toggle && (
            <div
              onClick={() => setToggle(false)}
              className="fixed inset-0 z-20 duration-500 transform transition-opacity bg-black/50"
            ></div>
          )}
        </div>

        {/* Menu Design */}
        <div>
          <div
            className={`${toggle ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 h-screen z-40 transition-transform transform duration-300 ease-in-out w-72 flex flex-col bg-white`}
          >
            {/* Logo Area! */}
            <div className="flex items-center justify-between py-3 px-3 shadow">
              {/* Home */}
              <Link
                onClick={() => setToggle(false)}
                to={"/"}
                className="flex items-center gap-2"
              >
                <img src={logo} alt="Home Logo" />
                <h2 className="text-2xl font-supermercadoone  text-gray-600 font-semibold">
                  Web<span>Code</span>
                </h2>
              </Link>

              {/* Button Area */}
              <div className="flex items-center gap-3">
                {toggle && (
                  <div onClick={() => setToggle(false)}>
                    <AiOutlineClose size={26} />
                  </div>
                )}
              </div>
            </div>

            {/* Menu */}
            <ul className="flex grow flex-col px-6 mt-8 text-xl gap-5 transition-all duration-500">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    onClick={() => setToggle(false)}
                    className={activeColor}
                    to={link.path}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              {/* Category Area! */}
              <li
                className="relative"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <button
                  className={`flex items-center gap-1 cursor-pointer hover:text-blue-500`}
                >
                  Categorys{" "}
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 mt-1" : "mt-1"}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-full ">
                    <ul className="bg-white border border-gray-100 shadow-xl rounded-xl py-2">
                      {categorys.map((cat, i) => (
                        <li key={i}>
                          <NavLink
                            className="block px-4 py-2.5 text-base text-gray-600 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                            to={cat.path}
                          >
                            {cat.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>

            {/* Button */}
            <div className="flex shrink-0 flex-col px-4 mb-5 gap-3">
              <Link
                to={"/login"}
                className="btn btn-success text-white "
              >
                Log In
              </Link>
              <Link to={"/"} className="btn btn-primary ">
                Free To Trail
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
