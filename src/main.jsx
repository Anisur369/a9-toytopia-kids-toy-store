import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//routing setup
import { AuthProvider } from "./components/context/AuthProvider";
import { RouterProvider } from "react-router-dom";
// import Root from "./components/root/Root";
// import Home from "./components/home/Home";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
// import Dashboard from "./components/dashboard/Dashboard";
// import Profile from "./components/profile/Profile";
// import PrivateRoute from "./components/routes/PrivateRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//       {
//         path: "/dashboard",
//         element: (
//           <PrivateRoute>
//             <Dashboard />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/profile",
//         element: (
//           <PrivateRoute>
//             <Profile />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/about",
//         element: (
//           <PrivateRoute>
//             <h1>This is About page</h1>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "*",
//         element: <h1>404 page not found</h1>,
//       },
//     ],
//   },
// ]);

import router from "./components/routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
