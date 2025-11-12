import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SpinnerLoader from "../loader/SpinnerLoader";
import Swal from "sweetalert2";

const ManageEvents = () => {
  const { user } = useContext(AuthContext);
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editedEvents, setEditedEvents] = useState({});

  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:3000/events");
      const data = await res.json();
      const userCreatedEvents = data
        .filter((event) => event.createdBy?.email === user.email)
        .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
      setMyEvents(userCreatedEvents);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchEvents();
    }
  }, [user]);

  const handleChange = (id, field, value) => {
    setEditedEvents((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleUpdate = async (id) => {
    const edited = editedEvents[id];
    const original = myEvents.find((e) => e._id === id);
    const updatedEvent = { ...original, ...edited };

    if (
      !updatedEvent.title ||
      !updatedEvent.description ||
      !updatedEvent.location ||
      !updatedEvent.thumbnail ||
      !updatedEvent.eventDate
    ) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "All fields are required.",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    try {
      await fetch(`http://localhost:3000/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent),
      });
      fetchEvents();
      setEditedEvents((prev) => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Event updated successfully",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-base-content bg-base-100">
        <SpinnerLoader />
      </div>
    );

  return (
    <div className="bg-base-100 min-h-screen py-10 px-4 sm:px-6 lg:px-10 text-base-content transition-all duration-300">
      <h2 className="text-3xl font-bold text-center mb-8">Manage My Events</h2>

      {myEvents.length === 0 ? (
        <p className="text-center text-base-content/50">
          You haven't created any events yet.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {myEvents.map((event, index) => {
            const currentEdit = editedEvents[event._id] || {};
            return (
              <div
                key={event._id}
                className="flex flex-col sm:flex-row items-start sm:items-center bg-base-200 rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all w-full"
              >
                <div className="text-base-content/50 font-semibold mr-2 sm:mr-4 mb-2 sm:mb-0">
                  {index + 1}.
                </div>

                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full sm:w-20 h-20 object-cover rounded-md mr-0 sm:mr-4 mb-2 sm:mb-0 shrink-0"
                />

                <div className="flex-1 flex flex-col gap-2 mb-2 sm:mb-0">
                  <input
                    type="text"
                    value={currentEdit.title ?? event.title}
                    onChange={(e) =>
                      handleChange(event._id, "title", e.target.value)
                    }
                    className="input input-bordered input-primary w-full bg-base-100 text-base-content"
                  />
                  <textarea
                    value={currentEdit.description ?? event.description}
                    onChange={(e) =>
                      handleChange(event._id, "description", e.target.value)
                    }
                    className="textarea textarea-bordered textarea-primary w-full bg-base-100 text-base-content"
                  />
                  <input
                    type="text"
                    value={currentEdit.location ?? event.location}
                    onChange={(e) =>
                      handleChange(event._id, "location", e.target.value)
                    }
                    className="input input-bordered input-primary w-full bg-base-100 text-base-content"
                  />
                  <input
                    type="text"
                    value={currentEdit.thumbnail ?? event.thumbnail}
                    onChange={(e) =>
                      handleChange(event._id, "thumbnail", e.target.value)
                    }
                    className="input input-bordered input-primary w-full bg-base-100 text-base-content"
                  />
                </div>

                <div className="flex flex-col sm:ml-4 text-sm text-base-content">
                  <input
                    type="date"
                    value={
                      currentEdit.eventDate
                        ? new Date(currentEdit.eventDate)
                            .toISOString()
                            .slice(0, 10)
                        : new Date(event.eventDate).toISOString().slice(0, 10)
                    }
                    onChange={(e) =>
                      handleChange(
                        event._id,
                        "eventDate",
                        new Date(e.target.value)
                      )
                    }
                    className="input input-bordered input-primary w-full bg-base-100 text-base-content mb-2"
                  />
                  <button
                    onClick={() => handleUpdate(event._id)}
                    className="btn btn-primary w-full"
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ManageEvents;
