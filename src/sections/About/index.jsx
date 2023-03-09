import {
  Title,
  Container,
  Section,
  WhatWeDo,
  Line,
  Button,
  Left,
  Right,
  Subtitle,
  Desc,
} from "./About.styles";
import { CubeCanvas } from "../../components";

function About() {
  return (
    <Section>
      <Container>
        <Left>
          <CubeCanvas />
        </Left>
        <Right>
          <Title>Think Outside the squarespace</Title>
          <WhatWeDo>
            <Line />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative group of designers and developers with a passion for
            arts.
          </Desc>
          <Button>See our works.</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default About;
