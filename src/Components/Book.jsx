import { CiStar } from "react-icons/ci";
const Book = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 p-4 border border-[#13131326]">
        <figure>
          <img
            className="rounded-xl"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>

        <div className="card-body p-0 mt-6">
          <div className="card-actions justify-start">
            <div className="badge text-[#23BE0A] font-semibold bg-[#23be0a0d] text-lg p-4">
              Fashion
            </div>
            <div className="badge text-[#23BE0A] font-semibold bg-[#23be0a0d] text-lg p-4">
              Fashion
            </div>
          </div>

          <h2 className="card-title text-2xl font-bold playfair">Shoes!</h2>
          <p>By : lajdf alsjdf alsdf j</p>
          <hr className="border border-dashed" />
          <div className="flex justify-between items-center">
            <p>Fiction</p>
            <div className="flex items-center gap-1">
              <p>5:00</p>
              <CiStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
