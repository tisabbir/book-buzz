import { Outlet } from "react-router-dom";
import Tab from "../Components/Tab";

const ListedBooks = () => {
  return (
    <div>
      {/* <Header></Header> */}
      {/* <Dropdown></Dropdown> */}
      <Tab></Tab>

      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
