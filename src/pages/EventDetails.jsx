import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import SpinnerLoader from "../loader/SpinnerLoader";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://social-event-web-api.vercel.app/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleJoinEvent = async () => {
    if (!user?.email) {
      Swal.fire("Error", "You must be logged in to join an event", "error");
      navigate("/auth/login");
      return;
    }

    const joinData = {
      eventId: event._id,
      eventTitle: event.title,
      thumbnail: event.thumbnail,
      eventDate: event.eventDate,
      location: event.location,
      eventType: event.eventType,
      userEmail: user.email,
      userName: user.displayName,
      createdBy: {
        name: event.createdBy?.name || event.createdBy,
        email: event.createdBy?.email || "",
      },
    };

    try {
      const res = await fetch(
        "https://social-event-web-api.vercel.app/joinedEvents",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(joinData),
        }
      );
      if (res.ok) {
        Swal.fire("Success", "You joined the event successfully", "success");
      } else {
        throw new Error("Failed to join event");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  if (!event) return <SpinnerLoader></SpinnerLoader>;

  return (
    <div className=" bg-[#081613] p-6 flex justify-center">
      <div className="bg-[#1E1A29] p-6 rounded-2xl max-w-3xl w-full shadow-lg">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-100 object-cover rounded-md mb-4"
        />
        <h2 className="text-3xl text-white font-semibold mb-2">
          {event.title}
        </h2>
        <p className="text-gray-400 mb-2">{event.description}</p>
        <p className="text-gray-400">Location: {event.location}</p>
        <p className="text-gray-400">Type: {event.eventType}</p>
        <p className="text-gray-400">
          Date: {new Date(event.eventDate).toLocaleDateString()}
        </p>
        <button
          onClick={handleJoinEvent}
          className="mt-4 bg-white text-[#112e29] py-2 px-4 rounded-md font-semibold hover:bg-[#ffc108] transition"
        >
          Join Event
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
