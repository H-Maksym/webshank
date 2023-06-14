import Container from "@/app/components/common/Container";
import Section from "@/app/components/common/Section";
import Heading from "@/app/components/common/Heading";
import Info from "@/app/components/Pages/Index/Info";

const Home = () => {
  return (
    <>
      <Container>
        <Section>
          <Heading headingLevel="h1">Main Page</Heading>
          <Info />
        </Section>
      </Container>
    </>
  );
};
export default Home;
