import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav></Nav>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
