import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import BookingModal from "../components/BookingModal";

const ShowDetails = () => {
  const data = useLoaderData();

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
  } = data;
  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const movieName = form.movieName.value;
    const time = form.time.value;
    const day = form.day.value;

    const booking = {
      name,
      email,
      movieName,
      time,
      day,
    };

    // set to local storage
    localStorage.setItem("bookings", JSON.stringify(booking));

    document.getElementById("my_modal_5").close();
    Swal.fire({
      title: "you booked this show",
      text: "Congratulations! your booking is successful. Check your email for confirmation",
      icon: "success",
      confirmButtonText: "OKAY",
    });
  };
  return (
    <div>
      <div className="flex justify-end items-center py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 h-[500px] ">
          <img
            className="w-full object-contain h-full"
            src={image?.original}
            alt={name}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center my-6">{name}</h1>
          <p dangerouslySetInnerHTML={{ __html: summary }}></p>
          <ul>
            <li>
              <span className="font-bold text-lg">Rating:</span>{" "}
              {rating?.average}
            </li>
            <li>
              <span className="font-bold text-lg">Genres:</span>{" "}
              {genres?.join(", ")}
            </li>
            <li>
              <span className="font-bold text-lg">Network:</span>{" "}
              {network?.name}
            </li>
            <li>
              <span className="font-bold text-lg">Status:</span> {status}
            </li>
            <li>
              <span className="font-bold text-lg">Premiered:</span> {premiered}
            </li>
            <li>
              <span className="font-bold text-lg">Schedule:</span>{" "}
              {schedule?.time}
            </li>
          </ul>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Book Now
          </button>
          <BookingModal
            handleBooking={handleBooking}
            name={name}
            schedule={schedule}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
