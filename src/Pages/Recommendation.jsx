const Recommendation = () => {
  const book = {
    bookId: 4,
    bookName: "The Hunger Games",
    author: "Suzanne Collins",
    image: "https://i.ibb.co/VVzLpVL/The-Hunger-Games.png",

    review:
      "The Hunger Games is a dystopian masterpiece that explores themes of power, sacrifice, and survival. Suzanne Collins' gripping narrative follows Katniss Everdeen as she volunteers to compete in the brutal Hunger Games, a televised fight to the death. Set in a post-apocalyptic world where the government controls its citizens through fear and oppression, this book challenges readers to question authority and stand up for what they believe in. With its action-packed plot and strong female protagonist, The Hunger Games has captivated audiences worldwide and sparked important discussions about social justice and resilience.",

    totalPages: 374,
    rating: 4.5,
    category: "Young Adult",
    tags: ["Dystopian", "Action"],
    publisher: "Scholastic Press",
    yearOfPublishing: 2008,
  };

  return (
    <div>
      <header className="bg-[#1313130d] py-8 rounded-xl mb-12">
        <h1 className="text-2xl font-bold text-center">
          Best Book Recommended for you
        </h1>
      </header>

      <div className="mt-12 flex gap-24 flex-col lg:flex-row justify-center">
        <div className="flex-1 flex justify-end">
          <img
            className="h-screen min-h-full text-right"
            src={book.image}
            alt=""
          />
        </div>
        <div className="flex-1 space-y-3">
          <h1 className="text-4xl font-bold playfair">{book.bookName}</h1>
          <p className="text-xl font-semibold">By : {book.author}</p>
          <hr />
          <p className="text-xl font-semibold">{book.category}</p>
          <hr />
          <p>
            {" "}
            <span className="text-xl font-bold">Review :</span> {book.review}
          </p>
          <div className="flex gap-4 items-center">
            <p className="font-bold">Tag</p>
            <div className="card-actions justify-start">
              {book.tags.map((tag, index) => (
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
            <span className=" flex-1 font-bold text-lg">{book.totalPages}</span>
          </p>
          <p className="flex gap-14">
            <span className="flex-1">Publisher :</span>
            <span className="flex-1 font-bold text-lg">{book.publisher}</span>
          </p>
          <p className="flex gap-14">
            <span className="flex-1">Year of Publishing :</span>
            <span className="flex-1 font-bold text-lg">
              {book.yearOfPublishing}
            </span>
          </p>
          <p className="flex gap-14">
            <span className="flex-1">Rating :</span>
            <span className="flex-1 font-bold text-lg">{book.rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
