import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar flex justify-between items-center">
        <div className="">
          <a className="btn btn-ghost text-xl">Book Buzz</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <NavLink className={"btn btn-ghost"}>Home</NavLink>
            <NavLink className={"btn btn-ghost"}>Listed Books</NavLink>
            <NavLink className={"btn btn-ghost"}>Pages</NavLink>
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
