import { createBrowserRouter, Navigate } from "react-router";
import Layout from "../layout/Layout";
import Signin from "../pages/auth/Signin";
import Error from "../pages/error/Error";
import ForgotPass from "../pages/auth/ForgotPass";
import Overview from "../pages/overview/Overview";
import UserManagement from "../pages/user management/UserManagement";
import BookingManagement from "../pages/booking management/BookingManagement";
import PostManagement from "../pages/post management/PostManagement";
import Settings from "../pages/setting & profile/Settings";

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
      { path: "overview", Component: Overview },
      { path: "usermanage", Component: UserManagement },
      { path: "booking", Component: BookingManagement },
      { path: "post", Component: PostManagement },
      { path: "profile", Component: Settings },


    ],
  },
]);
