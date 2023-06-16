import { Metadata } from "next";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export const metadata: Metadata = {
  title: "services",
  description: "Webshank - is you future",
};

const Services = () => {
  return (
    <>
      <Container>
        <Section>
          <Heading headingLevel="h1">Services Page</Heading>
        </Section>
      </Container>
    </>
  );
};

export default Services;
