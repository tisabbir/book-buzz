import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[500px] bg-base-200 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/kxs2C3J/713be2009ed5e0a38a726ba628d93944.png"
            className="max-w-md h-96 rounded-lg"
          />
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <Link
              to={"/read"}
              className="btn text-xl text-bold text-white bg-[#23BE0A]"
            >
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
