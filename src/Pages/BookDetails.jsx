import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find((book) => book.bookId === parseInt(bookId));

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
  } = book;

  //   console.log(publisher);

  let readBtnCount = 0;
  let wishBtnCount = 0;

  return (
    <div className="mt-12 flex gap-24 flex-col lg:flex-row justify-center">
      <div className="flex-1 flex justify-end">
        <img className="h-screen min-h-full text-right" src={image} alt="" />
      </div>
      <div className="flex-1 space-y-3">
        <h1 className="text-4xl font-bold playfair">{bookName}</h1>
        <p className="text-xl font-semibold">By : {author}</p>
        <hr />
        <p className="text-xl font-semibold">{category}</p>
        <hr />
        <p>
          {" "}
          <span className="text-xl font-bold">Review :</span> {review}
        </p>
        <div className="flex gap-4 items-center">
          <p className="font-bold">Tag</p>
          <div className="card-actions justify-start">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge text-[#23BE0A] font-semibold bg-[#23be0a0d] text-lg p-4"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <hr />

        <p className="flex gap-14">
          <span className="flex-1">Number of Page :</span>
          <span className=" flex-1 font-bold text-lg">{totalPages}</span>
        </p>
        <p className="flex gap-14">
          <span className="flex-1">Publisher :</span>
          <span className="flex-1 font-bold text-lg">{publisher}</span>
        </p>
        <p className="flex gap-14">
          <span className="flex-1">Year of Publishing :</span>
          <span className="flex-1 font-bold text-lg">{yearOfPublishing}</span>
        </p>
        <p className="flex gap-14">
          <span className="flex-1">Rating :</span>
          <span className="flex-1 font-bold text-lg">{rating}</span>
        </p>

        <button
          onClick={() => {
            readBtnCount++;
            if (readBtnCount > 1) {
              toast.warn(`You have already Read this!!!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } else {
              toast.success(`Successfully added to Read`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          }}
          className="btn btn-ghost border border-[#1313134d]"
        >
          Read
        </button>
        <button
          onClick={() => {
            wishBtnCount++;
            if (readBtnCount > 0) {
              toast.warn(`You have already Read this!!!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } else if (wishBtnCount > 1) {
              toast.warn(`You have already added this to Wishlist!!!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } else {
              toast.success(`Successfully added to Wishlist`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          }}
          className="btn ml-4 bg-[#50B1C9] text-white "
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
