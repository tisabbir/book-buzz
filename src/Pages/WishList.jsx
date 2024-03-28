import { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";
import Header from "../Components/Header";
import Tab from "../Components/Tab";
import WishBook from "../Components/WishBook";
import { getStoredWishBook } from "../Utility/localStorage";

const WishList = () => {
  // const wishBooks = getStoredWishBook();

  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const storedWishList = getStoredWishBook() || [];
    setWishList(storedWishList);
  }, []);

  const sortBooksBy = (category) => {
    let storedWishList = [];
    if (category === "year") {
      storedWishList = [...wishList].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    } else if (category === "rating") {
      storedWishList = [...wishList].sort((a, b) => b.rating - a.rating);
    } else if (category === "pages") {
      storedWishList = [...wishList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
    }

    setWishList(storedWishList);
  };

  return (
    <div>
      <Header></Header>
      <Dropdown sortBooksBy={sortBooksBy}></Dropdown>
      <Tab></Tab>
      <div className=" space-y-6 mt-12">
        {wishList.map((wishBook, index) => (
          <WishBook key={index} wishBook={wishBook}></WishBook>
        ))}
      </div>
    </div>
  );
};

export default WishList;
