import { Metadata } from "next";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

export const metadata: Metadata = {
  title: "contacts",
  description: "Webshank - is you future",
};

const Contacts = () => {
  return (
    <>
      <Container>
        <Section>
          <Heading headingLevel="h1">Contacts</Heading>
        </Section>
      </Container>
    </>
  );
};

export default Contacts;
