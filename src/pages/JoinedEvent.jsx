import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import SpinnerLoader from "../loader/SpinnerLoader";

const JoinedEvents = () => {
  const { user } = useContext(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/joinedEvents`)
      .then((res) => res.json())
      .then((data) => {
        const userEvents = data
          .filter((event) => event.userEmail === user.email)
          .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
        setJoinedEvents(userEvents);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [user]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <SpinnerLoader />
      </div>
    );

  return (
    <div className="bg-[#081613] min-h-screen py-10 px-4 sm:px-6 lg:px-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">My Joined Events</h2>

      {joinedEvents.length === 0 ? (
        <p className="text-center text-gray-400">
          You haven't joined any events yet.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {joinedEvents.map((event, index) => (
            <div
              key={event._id}
              className="flex flex-col sm:flex-row items-start sm:items-center bg-[#1E1A29] rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all cursor-pointer w-full"
              onClick={() => navigate(`/events/${event.eventId}`)}
            >
              <div className="text-gray-400 font-semibold mr-2 sm:mr-4 mb-2 sm:mb-0">
                {index + 1}.
              </div>

              <img
                src={event.thumbnail}
                alt={event.eventTitle}
                className="w-full sm:w-20 h-20 object-cover rounded-md mr-0 sm:mr-4 mb-2 sm:mb-0 shrink-0"
              />

              <div className="flex-1 flex flex-col justify-between mb-2 sm:mb-0">
                <h3 className="text-white font-semibold text-lg">
                  {event.eventTitle}
                </h3>
                <p className="text-gray-400 text-sm">
                  <span className="font-medium text-white">Date:</span>{" "}
                  {new Date(event.eventDate).toLocaleDateString()}
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="font-medium text-white">Location:</span>{" "}
                  {event.location}
                </p>
              </div>

              <div className="flex flex-col sm:ml-4 text-sm text-gray-300">
                <p>Created by: {event.createdBy?.name}</p>
                <p className="text-gray-400">{event.createdBy?.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JoinedEvents;
