import WishBook from "../Components/WishBook";
import { getStoredWishBook } from "../Utility/localStorage";

const WishList = () => {
  const wishBooks = getStoredWishBook();
  return (
    <div>
      <div className=" space-y-6 mt-12">
        {wishBooks.map((wishBook, index) => (
          <WishBook key={index} wishBook={wishBook}></WishBook>
        ))}
      </div>
    </div>
  );
};

export default WishList;
