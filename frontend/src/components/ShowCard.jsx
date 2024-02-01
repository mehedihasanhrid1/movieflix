/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  return (
    <div className="flex flex-col justify-between items-center bg-white m-4 p-4 rounded-lg shadow-lg">
      <img src={show.image?.medium} alt={show.name} />
      <div>
        <h2 className="text-center py-3 font-medium text-xl">
          {show.name}
        </h2>
        <Link to={`/shows/${show.id}`}>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
