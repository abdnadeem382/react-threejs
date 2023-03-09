import { useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_spono0k",
        "template_dxiij0v",
        {
          from_name: form.name,
          to_name: "Abdullah Nadeem",
          from_email: form.email,
          to_email: "abdnadeem382@gmail.com",
          message: form.message,
        },
        "hDrmcDlPrGbKzSD9o"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input
              type={"text"}
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              type={"email"}
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <TextArea
              rows={10}
              placeholder="Write your message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            <Button type="submit">{loading ? "Sending..." : "Send"}</Button>
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
