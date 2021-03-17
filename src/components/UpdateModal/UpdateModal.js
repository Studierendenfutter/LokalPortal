import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export default function UpdateModal({
  updateReadyData,
  setUpdateReady,
  update,
  header,
  text,
  icon = "pencil alternate",
}) {
  return (
    <Modal open={!!updateReadyData} onClose={() => setUpdateReady()} basic>
      <Header icon>
        <Icon name={icon} />
        {header}
      </Header>
      <Modal.Content>
        <p style={{ textAlign: "center" }}>{text}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setUpdateReady()}>
          <Icon name="remove" /> Nein
        </Button>
        <Button
          color="green"
          inverted
          onClick={() => {
            update(updateReadyData);
            setUpdateReady();
          }}
        >
          <Icon name="checkmark" /> Ja
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
