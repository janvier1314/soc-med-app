import { createBrowserRouter } from "react-router-dom";

import Login from "components/auth/Login";
import Register from "components/auth/Register";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: "Public Root",
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: REGISTER,
    element: <Register />,
  },
  {
    path: PROTECTED,
    element: "this is a string for <Layout />",
    children: [
      {
        path: DASHBOARD,
        element: "Dashboard",
      },
    ],
  },
]);
