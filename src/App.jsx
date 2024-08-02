import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "portfolio",
            element: <Portfolio />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ],
    { basename: "/React-Practice" }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
