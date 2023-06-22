import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import GoogleButton from "@/components/GoogleButton";
import SignInForm from "@/components/SignInForm";

const SignIn = async () => {
  return (
    <>
      <Container>
        <Section>
          <Heading headingLevel="h1">SignIn</Heading>
          <GoogleButton />
          <Heading headingLevel="h3">OR</Heading>
          <SignInForm />
        </Section>
      </Container>
    </>
  );
};

export default SignIn;
