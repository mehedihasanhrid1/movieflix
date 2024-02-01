import { useEffect } from "react";
import { useState } from "react";
import ShowCard from "./components/ShowCard";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((r) => r.json())
      .then((shows) => setShows(shows));
  }, []);

  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">MovieFlix</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-blue-50 p-4">
        {shows.map((show) => (
          <ShowCard key={show.show.id} show={show.show} />
        ))}
      </div>
    </div>
  );
}

export default App;
