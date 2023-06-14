"use client";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";

const ErrorWrapper = ({ error }: { error: Error }) => {
  return (
    <>
      <Container>
        <Section>
          <Heading headingLevel="h1">Oops!!! {error.message}</Heading>
        </Section>
      </Container>
    </>
  );
};
export default ErrorWrapper;
