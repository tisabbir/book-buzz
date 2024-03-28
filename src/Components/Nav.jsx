import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar flex flex-col lg:flex-row justify-between items-center">
        <div className="">
          <Link
            to={"/"}
            className="btn btn-ghost text-xl lg:text-3xl font-bold"
          >
            Book Buzz
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost border border-[#23BE0A] text-[#23BE0A] font-semibold text-md lg:text-xl"
                  : "btn btn-ghost font-semibold text-md lg:text-xl"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/listed"}
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost border border-[#23BE0A] text-[#23BE0A] font-semibold text-md lg:text-xl"
                  : "btn btn-ghost font-semibold text-md lg:text-xl"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to={"/pages"}
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost border border-[#23BE0A] text-[#23BE0A] font-semibold text-md lg:text-xl"
                  : "btn btn-ghost font-semibold text-md lg:text-xl"
              }
            >
              Pages
            </NavLink>
          </ul>
        </div>
        <div>
          <NavLink
            to={"/authors"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost border border-[#23BE0A] text-[#23BE0A] font-semibold text-md lg:text-xl"
                : "btn btn-ghost font-semibold text-md lg:text-xl"
            }
          >
            Authors
          </NavLink>
          <NavLink
            to={"/pages"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost border border-[#23BE0A] text-[#23BE0A] font-semibold text-md lg:text-xl"
                : "btn btn-ghost font-semibold text-md lg:text-xl"
            }
          >
            Recommendation
          </NavLink>
        </div>
        <div className="hidden lg:flex gap-4 ">
          <button className="btn bg-[#23BE0A] text-white">Sign In</button>
          <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
