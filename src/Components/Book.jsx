import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card w-96 bg-base-100 p-4 border border-[#13131326] mx-auto">
        <figure>
          <img className="rounded-xl h-80" src={image} alt="Shoes" />
        </figure>

        <div className="card-body p-0 mt-6">
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

          <h2 className="card-title text-2xl font-bold playfair">{bookName}</h2>
          <p>By : {author}</p>
          <hr className="border border-dashed" />
          <div className="flex justify-between items-center">
            <p>{category}</p>
            <div className="flex items-center gap-1">
              <p>{rating}</p>
              <CiStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
