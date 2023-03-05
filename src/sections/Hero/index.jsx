import {
  Title,
  Container,
  Section,
  WhatWeDo,
  Img,
  Line,
  Button,
  Left,
  Right,
  Subtitle,
  Desc,
} from "./Hero.styles";
import { Navbar } from "../../components";

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
