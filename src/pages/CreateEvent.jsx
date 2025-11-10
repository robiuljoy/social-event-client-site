import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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

    if (!eventDate || eventDate < new Date()) {
      return Swal.fire("Error", "Please select a future date", "error");
    }

    const newEvent = {
      title,
      description,
      eventType,
      thumbnail,
      location,
      eventDate,
      createdBy: user.email,
    };

    try {
      const res = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });

      if (res.ok) {
        Swal.fire("Success", "Event created successfully", "success");
        navigate("/");
      } else {
        throw new Error("Failed to create event");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#081613] p-6">
      <div className="bg-[#1E1A29] p-10 rounded-2xl w-full max-w-2xl shadow-lg">
        <h2 className="text-2xl text-white font-semibold mb-6">Create Event</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
          ></textarea>

          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
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
            className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
          />

          <DatePicker
            selected={eventDate}
            onChange={(date) => setEventDate(date)}
            minDate={new Date()}
            placeholderText="Select Event Date"
            className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500 w-full"
            calendarClassName="bg-[#1E1A29] text-gray-200 cursor-pointer rounded-md shadow-lg max-h-60 overflow-y-auto"
            popperClassName="z-50"
          />

          <button
            type="submit"
            className="bg-white text-[#112e29] hover:bg-[#ffc108] transition-all ease-in-out font-semibold rounded-md py-2 mt-2 cursor-pointer"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
