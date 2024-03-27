import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar flex justify-between items-center">
        <div className="">
          <Link to={"/"} className="btn btn-ghost text-3xl font-bold">
            Book Buzz
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost border border-[#23BE0A] text-[#23BE0A] font-semibold text-xl"
                  : "btn btn-ghost font-semibold text-xl"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/listed"}
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost border border-[#23BE0A] text-[#23BE0A] font-semibold text-xl"
                  : "btn btn-ghost font-semibold text-xl"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to={"/pages"}
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost border border-[#23BE0A] text-[#23BE0A] font-semibold text-xl"
                  : "btn btn-ghost font-semibold text-xl"
              }
            >
              Pages
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-4 ">
          <button className="btn bg-[#23BE0A] text-white">SignIn</button>
          <button className="btn bg-[#59C6D2] text-white">SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
