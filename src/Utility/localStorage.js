const getStoredReadBook = () => {
  const storedReadBooks = localStorage.getItem("read-book");
  if (storedReadBooks) {
    return JSON.parse(storedReadBooks);
  }
  return [];
};

const saveReadBook = (book) => {
  const storedReadBooks = getStoredReadBook();
  const exists = storedReadBooks.find((sbook) => sbook.bookId === book.bookId);
  if (!exists) {
    storedReadBooks.push(book);
    localStorage.setItem("read-book", JSON.stringify(storedReadBooks));
  }
};

const getStoredWishBook = () => {
  const storedWishBooks = localStorage.getItem("wish-book");
  if (storedWishBooks) {
    return JSON.parse(storedWishBooks);
  }
  return [];
};

const saveWishBook = (book) => {
  const storedWishBooks = getStoredWishBook();
  const exists = storedWishBooks.find((sbook) => sbook.bookId === book.bookId);
  if (!exists) {
    storedWishBooks.push(book);
    localStorage.setItem("wish-book", JSON.stringify(storedWishBooks));
  }
};

export { getStoredReadBook, getStoredWishBook, saveReadBook, saveWishBook };
