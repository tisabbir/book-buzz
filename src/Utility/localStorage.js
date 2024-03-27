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

export { getStoredReadBook, saveReadBook };
