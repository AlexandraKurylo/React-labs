import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactsPage } from "./pages/ContactsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MainLayout } from "./components/MainLayout";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectPage } from "./pages/ProjectPage";

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
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "portfolio/:id",
        element: <ProjectPage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "contacts",
        element: <ContactsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
