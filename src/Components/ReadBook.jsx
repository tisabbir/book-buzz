import { BsPeople } from "react-icons/bs";
import {
  MdOutlineEditLocation,
  MdOutlineInsertPageBreak,
} from "react-icons/md";
import { Link } from "react-router-dom";
const ReadBook = ({ readBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = readBook;

  return (
    <div>
      <div className="p-4 border border-[#13131326]  rounded-xl">
        <div className="flex gap-4 flex-col lg:flex-row  items-center lg:items-start justify-start">
          <img src={image} className=" h-[220px] rounded-lg" />
          <div className=" space-y-3 ">
            <h1 className="text-2xl playfair font-bold">{bookName}</h1>
            <p className="">By : {author}</p>

            <div className="flex flex-col lg:flex-row justify-start items-center gap-4">
              <div className="flex items-center gap-3">
                <p className="font-bold">Tag: </p>
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge text-[#23BE0A] font-semibold bg-[#23be0a0d] text-lg p-4"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <MdOutlineEditLocation></MdOutlineEditLocation>
                <p>Year of Publishing : {yearOfPublishing}</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-start items-center gap-4">
              <div className="flex items-center gap-2">
                <BsPeople />
                <p>Publisher : {publisher}</p>
              </div>

              <div className="flex items-center gap-2">
                <MdOutlineInsertPageBreak />
                <p>Pages : {totalPages}</p>
              </div>
            </div>

            <hr />

            <div className="flex flex-col lg:flex-row gap-4">
              <button className="btn rounded-full bg-[#328EFF]">
                Category : {category}
              </button>
              <button className="btn rounded-full bg-[#FFAC33] ">
                Rating : {rating}
              </button>
              <Link to={`/book/${bookId}`}>
                <div className="btn bg-[#23BE0A] text-white rounded-full ">
                  View Details
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
