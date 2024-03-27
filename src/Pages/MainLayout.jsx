import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../Components/Nav";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto w-[95%]">
      <Nav></Nav>

      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
