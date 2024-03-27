import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import BookDetails from "./Pages/BookDetails";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import MainLayout from "./Pages/MainLayout";
import Pages from "./Pages/Pages";
import ReadList from "./Pages/ReadList";
import WishList from "./Pages/WishList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
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
          { path: "wishlist", element: <WishList /> },
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
