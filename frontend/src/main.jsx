import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Visualizar from './pages/Visualizar';
import { Deletar } from './pages/Deletar';
import { Atualizar } from './pages/Atualizar.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Visualizar",
    element: <Visualizar/>
  },
  {
    path: "/Deletar",
    element: <Deletar/>
  },
  {
    path: "/Atualizar",
    element: <Atualizar/>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
