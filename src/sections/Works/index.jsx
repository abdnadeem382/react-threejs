import React from "react";
import { Section } from "../../commonStyles";
import { Container, List, ListItem, Left, Right } from "./Works.styles";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

function Works() {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {React.Children.toArray(
              data.map((item) => <ListItem text={item}>{item}</ListItem>)
            )}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
}

export default Works;
