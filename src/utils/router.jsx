import Home from "../pages/Home";
import InsectID from "../pages/InsectID";
export const router = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 3,
    path: "/insect/:id",
    element: <InsectID />,
  },
];
