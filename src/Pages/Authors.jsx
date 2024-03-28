import { useEffect, useState } from "react";
import Author from "../Components/Author";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("authors.json")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <div>
      <header className="bg-[#1313130d] py-8 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Meet the Authors</h1>
      </header>
      {/* Authors */}

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 mb-12 gap-4">
        {authors.map((author, index) => (
          <Author key={index} author={author}></Author>
        ))}
      </div>

      {/* Authors */}
    </div>
  );
};

export default Authors;
