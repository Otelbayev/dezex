import Home from "../pages/Home";
import ServiceID from "../pages/ServiceID";
export const router = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 3,
    path: "/services/:id",
    element: <ServiceID />,
  },
];
