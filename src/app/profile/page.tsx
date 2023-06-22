import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/configs/auth";

import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";

const Profile = async () => {
  const session = await getServerSession(authConfig);
  return (
    <>
      <Container>
        <Section>
          <Heading headingLevel="h1">Profile of {session?.user?.name}</Heading>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              width={100}
              height={100}
              alt="user Image"
              className="w-28 h-28 rounded-full"
            />
          )}
          <p>{session?.user?.email}</p>
        </Section>
      </Container>
    </>
  );
};

export default Profile;
