import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShowDetails from "../pages/ShowDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shows/:id",
    element: <ShowDetails />,
    loader: async ({ params }) => {
      const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
      const data = await res.json();
      return data;
    },
  },
]);

export default router;
