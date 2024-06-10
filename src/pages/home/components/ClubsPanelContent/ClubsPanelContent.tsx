import {
  BackgroundIcon,
  Card,
  FlexBox,
  Panel,
  Text,
  Title,
} from "../../../../components";
import Stores from "../Stores";

const ClubsPanelContent = () => (
  <Panel.Content>
    <FlexBox gap="10px">
      <Card>
        <Card.Header>
          <Title>Mon club t-à l'honneur</Title>
        </Card.Header>
        <Card.Content>
          <FlexBox gap="10px">
            <FlexBox direction="column" gap="14px">
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="community" />
                <Text size="sm">Plus de 700 joueurs déjà présent sur l’application</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="fingerprint" />
                <Text size="sm">Une application sécurisée</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="sliders" />
                <Text size="sm">Une carte club 100% personnalisable</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="chat" />
                <Text size="sm">Pas d’intermédiaire avec le joueur</Text>
              </FlexBox>
            </FlexBox>
            <FlexBox direction="column" gap="14px">
              <FlexBox gap="10px" align="user">
                <BackgroundIcon name="community" />
                <Text size="sm">Une connexion forte et rapide avec les joueurs</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="charts" />
                <Text size="sm">Une croissance de banc de + 70%</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="euro" />
                <Text size="sm">Un seul tarif</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="instagram" />
                <Text size="sm">Possibilité de gestion des réseaux</Text>
              </FlexBox>
            </FlexBox>
          </FlexBox>
          <Stores />
        </Card.Content>
        {/* <Card.Footer>Footer</Card.Footer> */}
      </Card>
      <Card variant="secondary">
        <Card.Header>
          <Title>Ils nous font déjà confiance</Title>
        </Card.Header>
      </Card>
    </FlexBox>
  </Panel.Content>
);

export default ClubsPanelContent;
