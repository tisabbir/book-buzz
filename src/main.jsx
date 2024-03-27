import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import BookDetails from "./Pages/BookDetails";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import MainLayout from "./Pages/MainLayout";
import Pages from "./Pages/Pages";
import ReadList from "./Pages/ReadList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "read",
            element: <ReadList />,
          },
          { path: "wishlist", element: <h1>Wishlist boooks</h1> },
        ],
      },
      {
        path: "/pages",
        element: <Pages></Pages>,
      },
      {
        path: "/book/:bookId",
        loader: () => fetch(`books.json`),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
