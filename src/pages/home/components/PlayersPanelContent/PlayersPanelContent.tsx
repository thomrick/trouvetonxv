import {
  BackgroundIcon,
  Card,
  FlexBox,
  Panel,
  Text,
  Title,
} from "../../../../components";
import Stores from "../Stores";
import { PlayerCard } from "./components";
import { PlayerCardParagraph } from "./components/PlayerCard/components";

const PlayersPanelContent = () => (
  <Panel.Content>
    <FlexBox gap="10px">
      <Card variant="secondary">
        <Card.Header>
          <Title>Leurs expériences</Title>
        </Card.Header>
        <Card.Content>
          <FlexBox direction="column" align="center" gap="24px">
            <PlayerCard>
              <PlayerCard.Picture src="/illustrations/players/player-1.png" />
              <PlayerCardParagraph>
                “Arrivé sur Toulouse en 2023 je ne savais pas comment faire mais
                grâce à l’appli j’ai trouvé mon club“
              </PlayerCardParagraph>
            </PlayerCard>
            <PlayerCard>
              <PlayerCard.Picture src="/illustrations/players/player-2.png" />
              <PlayerCardParagraph>
                “J’ai voulue me lancer un dernier challenge et grâce à TT15 j’ai
                réussie et j’en suis heureuse“
              </PlayerCardParagraph>
            </PlayerCard>
            <PlayerCard>
              <PlayerCard.Picture src="/illustrations/players/player-3.png" />
              <PlayerCardParagraph>
                “Ce qui est bien cool c’est que c’est moi qui choisi et je
                reçois pas des offres de partout“
              </PlayerCardParagraph>
            </PlayerCard>
          </FlexBox>
        </Card.Content>
      </Card>
      <Card>
        <Card.Header>
          <Title>Ma carrière en avant!!</Title>
        </Card.Header>
        <Card.Content>
          <FlexBox gap="10px">
            <FlexBox direction="column" gap="14px">
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="telegram" />
                <Text size="sm">Je reste maitre de mes conversations</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="euro" />
                <Text size="sm">Application gratuite</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="fingerprint" />
                <Text size="sm">Conversations et données 100% sécurisées</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="chat" />
                <Text size="sm">Chat entre joueurs de la région</Text>
              </FlexBox>
            </FlexBox>
            <FlexBox direction="column" gap="14px">
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="cart" />
                <Text size="sm">Un club en 3 semaines</Text>
              </FlexBox>
              <FlexBox gap="10px" align="center">
                <BackgroundIcon name="community" />
                <Text size="sm">300 clubs enregistrés</Text>
              </FlexBox>
            </FlexBox>
          </FlexBox>
          <Stores />
        </Card.Content>
      </Card>
    </FlexBox>
  </Panel.Content>
);

export default PlayersPanelContent;
