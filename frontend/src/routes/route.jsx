import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "./Root";
import ShowDetails from "../pages/ShowDetails";
import Errorpage from "../components/Errorpage";

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
        path: "/shows/:id",
        element: <ShowDetails />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://movieflixquadbshows.vercel.app/shows/${params.id}`
          );
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);

export default router;
