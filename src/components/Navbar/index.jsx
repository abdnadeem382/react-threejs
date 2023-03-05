import {
  Links,
  List,
  ListItem,
  Logo,
  Button,
  Container,
  Icons,
  Icon,
  Section,
} from "./Navbar.styles";

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/lama-logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
