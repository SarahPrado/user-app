import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./pages/login";
import App from "./App";
import Usuario from "./pages/Usuario";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Home from "./pages/Home";


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
    element: <App />,
    children: [
      {
        path: "/usuarios",
        element: <Usuario />
      },
      {
        path: "/contatos",
        element: <Contato />
      },
      {
        path: "/home",
        element: <Home />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);