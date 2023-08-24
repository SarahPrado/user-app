import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login";
import App from "./App";
import Usuario from "./pages/Usuario";
import Contato from "./pages/Contato";


/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/usuarios",
    element: <Usuario />
  },
  {
    path: "/contatos",
    element: <Contato />
  }
]);
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/usuarios",
    element: <Usuario />
  },
  {
    path: "/contatos",
    element: <Contato />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);