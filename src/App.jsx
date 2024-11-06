import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import ArtisanDetail from "./pages/ArtisanDetail";
import ArtisanList from "./pages/ArtisanList";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/404",
      element: <Page404 />,
    },
    {
      path: "/artisan-list",
      element: <ArtisanList />,
    },
    {
      path: "/artisan-detail/:id",
      element: <ArtisanDetail />,
    },
  ],
  {
    basename: "/Trouve-ton-artisan", // Remplacez "votre_repo" par le nom de votre dépôt GitHub
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
