import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "./Root";
import ShowDetails from "../pages/ShowDetails";
import Errorpage from "../components/Errorpage";
import Cart from "../components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/bookings",
        element: <Cart/>,
      },
      {
        path: "/shows/:id",
        element: <ShowDetails />,
        loader: async ({ params }) => {
          const result = await fetch(
            `https://movieflixquadbshows.vercel.app/shows/${params.id}`
          );
          const data = await result.json();
          return data;
        },
      },
    ],
  },
]);

export default router;
