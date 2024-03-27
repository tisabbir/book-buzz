import Book from "./Book";

const Books = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center text-5xl font-bold">Books</h1>

      <div className="book-card-container mt-9">
        <Book></Book>
      </div>
    </div>
  );
};

export default Books;
