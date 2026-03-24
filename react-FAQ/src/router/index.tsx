import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../components/MainLayout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { QuestionPage } from "../pages/QuestionPage";
import { NotFoundPage } from "../pages/NotFoundPage";

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
        path: "question/:id",
        element: <QuestionPage />,
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
