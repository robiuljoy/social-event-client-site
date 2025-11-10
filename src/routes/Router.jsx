import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../pages/Register";
import LoginForm from "../pages/LoginForm";
import PrivateRoute from "../provider/PrivateRoute";
import CreateEvent from "../pages/createEvent";
import UpcomingEvents from "../pages/UpcomingEvents";
import EventDetails from "../pages/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/main"),
        element: <Home></Home>,
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "/upcoming-events",
        element: <UpcomingEvents />,
      },
      {
        path: "/events/:id",
        element: <EventDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
