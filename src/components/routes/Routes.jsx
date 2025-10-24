import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../profile/Profile";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../notFound/NotFound";
import Details from "../details/Details";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        loader: async () => {
          const response = await fetch("/cards.json");
          const data = await response.json();
          return data;
        },
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <h1>This is About page</h1>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
