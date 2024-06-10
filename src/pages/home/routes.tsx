import { createMemoryRouter } from "react-router-dom";
import {
  ApplicationPanelContent,
  ClubsPanelContent,
  PlayersPanelContent,
} from "./components";

const routes = createMemoryRouter([
  {
    path: "/",
    element: <ApplicationPanelContent />,
  },
  {
    path: "/clubs",
    element: <ClubsPanelContent />,
  },
  {
    path: "/players",
    element: <PlayersPanelContent />,
  },
]);

export default routes;
