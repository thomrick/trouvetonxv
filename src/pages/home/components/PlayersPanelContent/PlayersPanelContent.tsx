import { BackgroundIcon, Card, FlexBox, Panel, Title } from "../../../../components";

const PlayersPanelContent = () => (
  <Panel.Content>
    <FlexBox gap="10px">
      <Card variant="secondary">
        <Card.Header>
          <Title>Leurs expériences</Title>
        </Card.Header>
      </Card>
      <Card>
        <Card.Header>
          <Title>Ma carrière en avant!!</Title>
        </Card.Header>
        <Card.Content>
          <FlexBox>
            <FlexBox>
              <BackgroundIcon name="telegram" />
            </FlexBox>
          </FlexBox>
        </Card.Content>
      </Card>
    </FlexBox>
  </Panel.Content>
);

export default PlayersPanelContent;
