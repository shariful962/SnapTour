import { createBrowserRouter, Navigate } from "react-router";
import Layout from "../layout/Layout";
import Signin from "../pages/auth/Signin";
import Dashboard from "../pages/dashboard/Dashboard";
import UserManagement from "../pages/userManagement/UserManagement";
import Error from "../pages/error/Error";
import ForgotPass from "../pages/auth/ForgotPass";
import ManageCompetition from "../pages/manageCompetition/ManageCompetition";
import UserFeedback from "../pages/userFeedback/UserFeedback";

export const router = createBrowserRouter([
  {
    path: "/signin",
    Component: Signin,
  },
  {
    path: "/forgotPassword",
    Component: ForgotPass,
  },

  {
    path: "/",
    Component: Layout,
    errorElement: <Error />,
    children: [
      { index: true, element: <Navigate to="/signin" replace /> },
      { path: "dashboard", Component: Dashboard },
      
      {
        path: "user_manage",
        Component: UserManagement,
      },
      {
        path: "manage_com",
        Component: ManageCompetition
      },
      {
        path: "/feedback",
        Component: UserFeedback
      }
    ],
  },
]);
