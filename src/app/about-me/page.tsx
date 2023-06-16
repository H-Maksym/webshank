import { Metadata } from "next";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export const metadata: Metadata = {
  title: "about-me",
  description: "Webshank - is you future",
};

const AboutMe = () => {
  return (
    <>
      <Container>
        <Section>
          <Heading headingLevel="h1">About ME</Heading>
        </Section>
      </Container>
    </>
  );
};

export default AboutMe;
