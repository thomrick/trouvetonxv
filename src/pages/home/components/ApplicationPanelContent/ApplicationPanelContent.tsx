import { Card, FlexBox, Panel, Paragraph, Text, Title } from "../../../../components";

const ApplicationPanelContent = () => (
  <Panel.Content>
    <FlexBox gap="10px">
      <Card variant="secondary">Content</Card>
      <Card>
        <Card.Header>
          <Title>L'application</Title>
        </Card.Header>
        <Card.Content>
          <FlexBox align="center" gap="14px">
            Illustration
            <Paragraph>
              La première application de rencontre entre joueurs et clubs de
              rugby amateur de la région.
            </Paragraph>
          </FlexBox>
          <FlexBox>Stores</FlexBox>
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
