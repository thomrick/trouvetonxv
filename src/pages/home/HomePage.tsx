import {
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import { Button, ButtonGroup, Page, PageLayout, Panel } from "../../components";
import {
  ApplicationPanelContent,
  ClubsPanelContent,
  PlayersPanelContent,
} from "./components";
import "./home.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Page>
      <PageLayout size="md">
        <Panel>
          <Routes>
            <Route path="/" element={<ApplicationPanelContent />} />
            <Route path="/clubs" element={<ClubsPanelContent />} />
            <Route path="/players" element={<PlayersPanelContent />} />
          </Routes>
          <Panel.Content>
            <div className="home-page__actions">
              <ButtonGroup>
                <Button active={pathname === "/"} onClick={() => navigate("/")}>
                  L'appli
                </Button>
                <Button
                  active={pathname === "/clubs"}
                  onClick={() => navigate("/clubs")}
                >
                  Clubs
                </Button>
                <Button
                  active={pathname === "/players"}
                  onClick={() => navigate("/players")}
                >
                  Joueurs
                </Button>
              </ButtonGroup>
            </div>
          </Panel.Content>
        </Panel>
      </PageLayout>
    </Page>
  );
};

export default HomePage;
