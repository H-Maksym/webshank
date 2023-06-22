"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface IGoogleButtonProps {}

const GoogleButton: FC<IGoogleButtonProps> = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <>
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="custom-button custom-button-hover mt-10"
      >
        GoogleButton
      </button>
    </>
  );
};

export default GoogleButton;
