import React, { useState } from "react";
import { Switch, Case } from "react-if";

import { Section } from "../../commonStyles";
import { Container, List, ListItem, Left, Right } from "./Works.styles";
import { WebDesign, ProductDesign, Development } from "../../components";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

function Works() {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {React.Children.toArray(
              data.map((item) => (
                <ListItem text={item} onClick={() => setWork(item)}>
                  {item}
                </ListItem>
              ))
            )}
          </List>
        </Left>
        <Right>
          <Switch>
            <Case condition={work === "Web Design"}>
              <WebDesign />
            </Case>

            <Case condition={work === "Development"}>
              <Development />
            </Case>

            <Case condition={work === "Product Design"}>
              <ProductDesign />
            </Case>
          </Switch>
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
