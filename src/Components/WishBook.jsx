import { BsPeople } from "react-icons/bs";
import {
  MdOutlineEditLocation,
  MdOutlineInsertPageBreak,
} from "react-icons/md";
const WishBook = ({ wishBook }) => {
  const {
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
  } = wishBook;

  return (
    <div>
      <div className="p-4 border border-[#13131326]  rounded-xl">
        <div className="flex gap-4 flex-col lg:flex-row  items-start justify-start">
          <img src={image} className=" h-[220px] rounded-lg" />
          <div className=" space-y-3 ">
            <h1 className="text-2xl playfair font-bold">{bookName}</h1>
            <p className="">By : {author}</p>

            <div className="flex justify-start items-center gap-4">
              <p className="font-bold">Tag : </p>
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge text-[#23BE0A] font-semibold bg-[#23be0a0d] text-lg p-4"
                >
                  {tag}
                </div>
              ))}

              <MdOutlineEditLocation></MdOutlineEditLocation>
              <p>Year of Publishing : {yearOfPublishing}</p>
            </div>

            <div className="flex justify-start items-center gap-4">
              <BsPeople />
              <p>Publisher : {publisher}</p>
              <MdOutlineInsertPageBreak />
              <p>Pages : {totalPages}</p>
            </div>

            <hr />

            <div className="flex gap-4">
              <button className="btn rounded-full bg-[#328EFF]">
                Category : {category}
              </button>
              <button className="btn rounded-full bg-[#FFAC33] ">
                Rating : {rating}
              </button>
              <button className="btn bg-[#23BE0A] text-white rounded-full ">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishBook;
