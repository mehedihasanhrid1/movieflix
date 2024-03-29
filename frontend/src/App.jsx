import { useEffect } from "react";
import { useState } from "react";
import ShowCard from "./components/ShowCard";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://movieflixquadbshows.vercel.app/shows")
      .then((result) => result.json())
      .then((shows) => setShows(shows));
  }, []);

  return (
    <div className="mx-auto bg-blue-50">
      <h1 className="text-5xl font-bold text-center pt-8">Movie<span className="text-red-500">Flix</span> </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  p-4 pb-8">
        {shows.map((show) => (
          <ShowCard key={show.show.id} data={show} />
        ))}
      </div>
    </div>
  );
}

export default App;
