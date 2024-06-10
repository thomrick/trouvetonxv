import { Card, FlexBox, Image, Panel, Paragraph, Text, Title } from "../../../../components";
import Stores from "../Stores";
import './application-panel-content.css'

const ApplicationPanelContent = () => (
  <Panel.Content>
    <FlexBox gap="10px">
      <Card variant="secondary">
        <div className="application-panel-content__illustration">
          <div className="application-panel-content__illustration__top">
            <Image src="/illustrations/application-top.png" />
          </div>
          <div className="application-panel-content__illustration__center">
            <Image src="/illustrations/application-center.png" />
          </div>
          <div className="application-panel-content__illustration__bottom">
            <Image src="/illustrations/application-bottom.png" />
          </div>
        </div>
      </Card>
      <Card>
        <Card.Header>
          <Title>L'application</Title>
        </Card.Header>
        <Card.Content>
          <FlexBox align="center" gap="14px">
            <div>
              <Image src="/illustrations/application.png" />
            </div>
            <Paragraph>
              La première application de rencontre entre joueurs et clubs de
              rugby amateur de la région.
            </Paragraph>
          </FlexBox>
          <Stores />
          <Paragraph>
            Avec <Text>Trouve Ton XV</Text> fini les galères de bancs vide à chaque flocons
            de neige. Retrouvez les joueurs les plus motivés de la région et
            constituez l’effectif dont vous avez toujours rêvé.
          </Paragraph>
          <Paragraph>
            Avec <Text>Trouve Ton XV</Text> fini les mercredis soir à regarder son nombril
            dans le miroir, rechausse tes crampons va fouler le près dans le
            club qui est fait pour toi.
          </Paragraph>
        </Card.Content>
      </Card>
    </FlexBox>
  </Panel.Content>
);

export default ApplicationPanelContent;
