"use client";
import { FC, FormEventHandler } from "react";
import Heading from "../common/Heading/Heading";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface ISignInFormProps {}

const SignInForm: FC<ISignInFormProps> = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      //INFO If redirect true, when we have error we redirect to form with autogenerate
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log("response", res);
    }
  };

  return (
    <>
      <Heading headingLevel="h2" className="my-5">
        SignInForm
      </Heading>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] card-set [--card-gap:10px]"
      >
        <label>
          <span className="block mb-2">Email:</span>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 card-set-item border rounded-lg focus:outline-none"
          />
        </label>
        <label>
          <span className="block mb-2">Password:</span>
          <input
            type="password"
            name="password"
            required
            className="w-full p-2 card-set-item border rounded-lg focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="custom-button-secondary custom-button-secondary-hover mt-10"
        >
          SignIn
        </button>
      </form>
    </>
  );
};

export default SignInForm;
