// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */
// Import des pages
import App from "./App";

import DuelQuiz from "./pages/DuelQuiz";
import ErrorPage from "./pages/ErrorPage";
import ForceDuBien from "./pages/ForceDuBien";
import ForceDuMal from "./pages/ForceDuMal";
import Histoire from "./pages/Histoire";
import HomePage from "./pages/HomePage";

import Inscription from "./pages/Inscription";
import Warriors from "./pages/Warriors";

import { getAllLsda } from "./services/requests";

import "./styles/inscription.css";
import "./styles/picturesLsda.css";
import "./styles/accueil.css";
import "./styles/histoire.css";
import "./styles/warrior.css";

/* ************************************************************************* */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/forcedubien",
        element: <ForceDuBien />,
      },
      {
        path: "/forcedumal",
        element: <ForceDuMal />,
      },
      {
        path: "/quiz",
        element: <DuelQuiz />,
      },
      {
        path: "/histoire",
        element: <Histoire />,
      },
      {
        path: "/warriors",
        element: <Warriors />,
        loader: () => getAllLsda(),
      },
      {
        path: "/inscription",
        element: <Inscription />,
        loader: () => getAllLsda(),
      },

      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
