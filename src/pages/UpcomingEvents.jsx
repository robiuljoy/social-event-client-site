import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [eventTypeFilter, setEventTypeFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      let url = `http://localhost:3000/events?`;

      if (eventTypeFilter && eventTypeFilter !== "All") {
        url += `eventType=${encodeURIComponent(eventTypeFilter)}&`;
      }
      if (searchQuery) {
        url += `search=${encodeURIComponent(searchQuery)}&`;
      }

      const res = await fetch(url);
      const data = await res.json();

      const upcoming = data
        .filter((event) => new Date(event.eventDate) >= new Date())
        .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));

      setEvents(upcoming);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [eventTypeFilter, searchQuery]);

  return (
    <div className="py-12 bg-base-100 min-h-screen transition-all duration-300">
      <h2 className="text-4xl font-bold text-base-content text-center mb-6">
        Upcoming Social Development Events
      </h2>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10 px-6 md:px-16">
        <select
          value={eventTypeFilter}
          onChange={(e) => setEventTypeFilter(e.target.value)}
          className="bg-base-200 text-base-content px-3 py-2 rounded-md border border-base-300 focus:outline-none"
        >
          <option value="All">All Types</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Search by event title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-base-200 text-base-content px-3 py-2 rounded-md border border-base-300 focus:outline-none w-full md:w-1/3"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16 md:w-11/12 md:mx-auto">
        {events.map((event) => (
          <div
            key={event._id}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group bg-base-200"
          >
            <div className="absolute top-4 left-4 bg-linear-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-md">
              {event.eventType}
            </div>

            <img
              src={event.thumbnail}
              alt={event.title}
              className="w-full h-64 object-cover block transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            <div className="p-6 flex flex-col justify-between h-72">
              <div>
                <h3 className="text-2xl font-bold text-base-content mb-2 hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-base-content/70 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex flex-col gap-2 text-base-content/80 text-sm">
                  <span>
                    <span className="font-semibold">Location:</span>{" "}
                    {event.location}
                  </span>
                  <span>
                    <span className="font-semibold">Event Date:</span>{" "}
                    {new Date(event.eventDate).toLocaleDateString()}
                  </span>
                  <span>
                    <span className="font-semibold">Created By:</span>{" "}
                    {event.createdBy?.name || event.createdBy}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate(`/events/${event._id}`)}
                className="mt-4 w-full py-2 rounded-lg bg-linear-to-r from-accent via-secondary to-primary text-white font-semibold cursor-pointer hover:opacity-90 transition"
              >
                View Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
