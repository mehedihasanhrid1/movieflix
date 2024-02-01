/* eslint-disable react/prop-types */

const BookingModal = ({ handleBooking, name, schedule }) => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Book Now</h3>
        <div className="">
          <form method="dialog" onSubmit={handleBooking}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                id="name"
                name="name"
                required
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="youremail@gmail.com"
                required
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Movie Name</span>
              </div>
              <input
                type="text"
                id="movieName"
                defaultValue={name}
                name="movieName"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <select
              className="select select-bordered w-full max-w-xs mt-4"
              defaultValue={schedule?.time}
              name="time"
            >
              <option name="time" key={schedule?.time} value={schedule?.time}>
                {schedule?.time}
              </option>
            </select>
            <select
              className="select select-bordered w-full max-w-xs my-4"
              defaultValue={schedule?.days[0]}
              name="day"
            >
              {schedule?.days.map((day) => (
                <option key={day} value={day} name="day">
                  {day}
                </option>
              ))}
            </select>
            <p>Ticket Price: $100</p>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Book
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default BookingModal;
