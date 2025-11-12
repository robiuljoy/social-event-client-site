import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const CreateEvent = () => {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("Cleanup");
  const [thumbnail, setThumbnail] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !eventType ||
      !thumbnail ||
      !location ||
      !eventDate
    ) {
      return Swal.fire("Error", "Please fill in all fields", "error");
    }

    if (eventDate < new Date()) {
      return Swal.fire("Error", "Please select a future date", "error");
    }

    const newEvent = {
      title,
      description,
      eventType,
      thumbnail,
      location,
      eventDate,
      createdBy: {
        name: user.displayName || "Anonymous",
        email: user.email,
      },
    };

    try {
      const res = await fetch(
        "https://social-event-web-api.vercel.app/events",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEvent),
        }
      );

      if (res.ok) {
        Swal.fire("Success", "Event created successfully", "success");
        setTitle("");
        setDescription("");
        setEventType("Cleanup");
        setThumbnail("");
        setLocation("");
        setEventDate(null);
      } else {
        throw new Error("Failed to create event");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 transition-all duration-300 p-6">
      <div className="bg-base-200 p-10 rounded-2xl w-full max-w-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-base-content mb-6">
          Create Event
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered input-primary w-full text-base-content bg-base-100"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered textarea-primary w-full text-base-content bg-base-100"
          />
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="select select-bordered select-primary w-full text-base-content bg-base-100"
          >
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Donation">Donation</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Thumbnail Image URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="input input-bordered input-primary w-full text-base-content bg-base-100"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input input-bordered input-primary w-full text-base-content bg-base-100"
          />
          <DatePicker
            selected={eventDate}
            onChange={(date) => setEventDate(date)}
            minDate={new Date()}
            placeholderText="Select Event Date"
            className="input input-bordered input-primary w-full text-base-content bg-base-100"
            calendarClassName="bg-base-200 text-base-content cursor-pointer rounded-md shadow-lg max-h-60 overflow-y-auto"
            popperClassName="z-50"
          />
          <button
            type="submit"
            className="btn btn-primary w-full text-base-100 mt-2"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
