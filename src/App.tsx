import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ChildPolicy from "./pages/ChildPolicy";
import GetInvolved from "./pages/GetInvolved";
import Programs from "./pages/Programs";
import Foundation from "./pages/Foundation";
import Payment from "./pages/Payment";
import PASCEL from "./pages/PASCEL";
import ResourceHub from "./pages/Resources";
import ResourceDescription from "./pages/ResourceDescription";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/child-policy", element: <ChildPolicy /> },
  {
    path: "/resources",
    children: [
      { index: true, element: <ResourceHub /> },
      { path: ":slug", element: <ResourceDescription /> },
    ],
  },
  { path: "/programs", element: <Programs /> },
  {
    path: "/foundation",
    children: [
      { index: true, element: <Foundation /> },
      { path: "programs", element: <Programs /> },
      { path: "pascel", element: <PASCEL /> },
      { path: "payment", element: <Payment /> },
    ],
  },
  {
    path: "/get-involved",
    children: [
      { index: true, element: <GetInvolved /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}