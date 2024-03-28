import { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";
import ReadBook from "../Components/ReadBook";
import { getStoredReadBook } from "../Utility/localStorage";

const ReadList = () => {
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedReadList = getStoredReadBook() || [];
    setReadList(storedReadList);
  }, []);

  const sortBooksBy = (category) => {
    let storedReadList = [];
    if (category === "year") {
      storedReadList = [...readList].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    } else if (category === "rating") {
      storedReadList = [...readList].sort((a, b) => b.rating - a.rating);
    } else if (category === "pages") {
      storedReadList = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
    }
    setReadList(storedReadList);
  };

  return (
    <div>
      <Dropdown sortBooksBy={sortBooksBy} />
      <div className=" space-y-6 mt-12">
        {readList.map((readBook, index) => (
          <ReadBook key={index} readBook={readBook}></ReadBook>
        ))}
      </div>
    </div>
  );
};

export default ReadList;
