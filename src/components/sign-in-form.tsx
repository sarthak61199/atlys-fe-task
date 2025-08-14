import { Link } from "react-router";
import { Input } from "./ui/input";
import login from "../assets/icons/login.svg";

function SignInForm() {
  return (
    <div className="bg-[#EBEBEB] p-3 pb-0 rounded-4xl min-w-[500px]">
      <div className="flex flex-col items-center px-12 bg-white rounded-4xl py-10">
        <div className="bg-[#f8f8f8] p-4 rounded-full w-fit flex items-center justify-center mb-5">
          <img src={login} alt="Login" className="size-5" />
        </div>
        <h2 className="font-bold text-xl mb-1">Sign in to continue</h2>
        <p className="text-sm">
          Sign in to access all the features on this app
        </p>
        <form className="mt-16 flex flex-col gap-4 w-full">
          <Input
            type="text"
            placeholder="Enter your email or username"
            name="emailOrUsername"
            id="emailOrUsername"
            label="Email or username"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            label="Password"
          />
          <button className="mb-4 w-full bg-[#5057EA] text-white py-4 rounded-xl text-sm mt-1">Sign In</button>
        </form>
      </div>
      <p className="text-center py-4 text-sm">
        Do not have and account? <Link to="/sign-up" className="text-[#5057EA] font-semibold">Sign up</Link>
      </p>
    </div>
  );
}

export default SignInForm;
