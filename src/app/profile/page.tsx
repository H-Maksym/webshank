import Heading from "@/components/common/Heading";
import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
const Profile = async () => {
  const session = await getServerSession(authConfig);
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Profile;
