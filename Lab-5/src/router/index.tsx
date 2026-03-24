import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../components/MainLayout/MainLayout";
import { HomePage } from "../pages/HomePage/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { UserProfileFormPage } from "../pages/UserProfileFormPage";
import { FirstTaskPage } from "../pages/FirstTaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <UserProfileFormPage />,
      },
      {
        path: "task-1",
        element: <FirstTaskPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
