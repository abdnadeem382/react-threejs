import { Section } from "../../commonStyles";
import {
  Button,
  Container,
  Form,
  TextArea,
  Input,
  Left,
  Right,
  Title,
} from "./Contact.styles";
import { Map } from "../../components";

function Contact() {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea rows={10} placeholder="Write your message" />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
}

export default Contact;
