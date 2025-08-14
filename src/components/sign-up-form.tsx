import { Link } from "react-router";
import login from "../assets/icons/login.svg";

function SignUpForm() {
  return (
    <div className="bg-[#EBEBEB] p-3 pb-0 rounded-4xl min-w-[500px]">
      <div className="flex flex-col items-center px-12 bg-white rounded-4xl py-10">
        <div className="bg-[#f8f8f8] p-4 rounded-full w-fit flex items-center justify-center mb-5">
          <img src={login} alt="Login" className="size-5" />
        </div>
        <h2 className="font-bold text-xl mb-1">Create an account to continue</h2>
        <p className="text-sm">
          Create an account to access all the features on this app
        </p>
        <form className="mt-16 flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="emailOrUsername" className="text-sm font-semibold">
              Email or username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              name="emailOrUsername"
              id="emailOrUsername"
              className="text-sm bg-[#F4F4F4] p-4 rounded-xl placeholder:text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
              className="text-sm bg-[#F4F4F4] p-4 rounded-xl placeholder:text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="repeatPassword" className="text-sm font-semibold">
              Repeat password
            </label>
            <input
              type="password"
              placeholder="Enter your password again"
              name="repeatPassword"
              id="repeatPassword"
              className="text-sm bg-[#F4F4F4] p-4 rounded-xl placeholder:text-sm"
            />
          </div>
          <button className="mb-4 w-full bg-[#5057EA] text-white py-4 rounded-xl text-sm mt-1">
            Sign Up
          </button>
        </form>
      </div>
      <p className="text-center py-4 text-sm">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-[#5057EA] font-semibold">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default SignUpForm;
