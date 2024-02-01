import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const ShowDetails = () => {
  const data = useLoaderData();
  const [modal, openModal] = useState(false);

  const {
    name,
    image,
    summary,
    rating,
    genres,
    network,
    status,
    premiered,
    schedule,
  } = data.show;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const movie = form.movie.value;
    const price = form.price.value;
    const time = form.time.value;
    const bookingimage = image.original;

    const booking = {
      name,
      email,
      movie,
      time,
      price,
      bookingimage
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    Swal.fire({
      title: "You booked this show!",
      text: "Congratulations! your booking is successful.",
      icon: "success",
      confirmButtonText: "Okey",
    });

    openModal(!modal);
  };

  return (
    <div className="py-5 lg:py-8 bg-[#e5f0f7f5]">
      <div className="flex flex-col lg:flex-row">
        <div className="mx-5 md:mx-10 flex items-center justify-center">
          <a href={data.show.url}>
            <div className="h-96 w-80 md:h-[32rem] md:w-[30rem]">
              <img
                className="rounded-lg h-full w-full object-cover"
                src={image?.original}
                alt={name}
              />
            </div>
          </a>
        </div>
        <div className="px-5 md:px-8 py-8 lg:py-0 lg:px-0">
          <h1 className="text-4xl  font-bold text-gray-900 mb-6">{name}</h1>
          <p
            className="text-gray-700 pr-10 pb-3"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></p>
          <ul className="space-y-1">
            <li>
              <span className="font-bold text-lg pr-2">Rating:</span>{" "}
              {rating.average ? rating.average : "N/A"}
            </li>
            <li>
              <span className="font-bold text-lg pr-2">Genres:</span>{" "}
              {genres?.join(", ")}
            </li>
            <li>
              <span className="font-bold text-lg pr-2">Network:</span>{" "}
              {network?.name}
            </li>
            <li>
              <span className="font-bold text-lg pr-2">Status:</span> {status}
            </li>
            <li>
              <span className="font-bold text-lg pr-2">Premiered:</span>{" "}
              {premiered}
            </li>
            <li>
              <span className="font-bold text-lg pr-2">Schedule:</span>{" "}
              {schedule?.time}
            </li>
          </ul>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => openModal(!modal)}
          >
            Book Now
          </button>
        </div>
      </div>

      <div
        className={`${
          modal
            ? " absolute h-screen top-0 left-0 flex items-center justify-center w-full z-50"
            : "hidden"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,.6)" }}
      >
        <div className="h-auto p-4 mx-2 text-left bg-white shadow-3xl rounded-3xl md:max-w-xl md:p-6 lg:p-8 md:mx-0">
          <div className="mb-4 text-center">
            <h2 className="mb-4 text-2xl font-bold leading-snug text-gray-800">
              Edit a Task
            </h2>
          </div>
          <div>
            <form
              className="space-y-4 md:space-y-3 w-72 lg:w-96"
              onSubmit={handleBooking}
            >
              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                placeholder="Your name"
                type="text"
                id="name"
                name="name"
                required
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                placeholder="name@domain.com"
                type="text"
                id="email"
                name="email"
                required
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="movie"
              >
                Movie name:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                type="text"
                id="movie"
                name="movie"
                defaultValue={name}
                required
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="price"
              >
                Price:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                type="text"
                id="price"
                name="price"
                defaultValue="$100"
                disabled
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="time"
              >
                Time:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                defaultValue={schedule?.time}
                name="time"
              >
                <option name="time" key={schedule?.time} value={schedule?.time}>
                  {schedule?.time}
                </option>
              </select>

              <span className="justify-center gap-3 lg:gap-4 flex shadow-sm items-center">
                <button
                  type="button"
                  onClick={() => {
                    openModal(!modal);
                  }}
                  className="inline-block px-5 py-3 mt-3 font-semibold leading-none text-red-500 border border-red-500 rounded-lg hover:text-red-400 hover:border-red-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-block px-5 py-3 mt-3 font-semibold leading-none text-gray-100 bg-red-600 hover:bg-red-500 border border-gray-100 rounded-lg"
                >
                  Cofirm
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
