import ReadBook from "../Components/ReadBook";
import { getStoredReadBook } from "../Utility/localStorage";

const ReadList = () => {
  const readBooks = getStoredReadBook();

  return (
    <div>
      <div className=" space-y-6 mt-12">
        {readBooks.map((readBook, index) => (
          <ReadBook key={index} readBook={readBook}></ReadBook>
        ))}
      </div>
    </div>
  );
};

export default ReadList;
