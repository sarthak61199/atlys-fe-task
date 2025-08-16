import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router";
import login from "../assets/icons/login.svg";
import { useAuth } from "../contexts/auth-context";
import { Input } from "./ui/input";

function SignInForm() {
  const navigate = useNavigate();

  const { signIn, switchAuthMode, isDialogMode } = useAuth();
  const [credentials, setCredentials] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = signIn(credentials.emailOrUsername, credentials.password);

    if (result) {
      if (!isDialogMode) {
        navigate("/");
      }
    }
  };

  const handleSwitchToSignUp = () => {
    if (isDialogMode) {
      switchAuthMode("sign-up");
    } else {
      navigate("/sign-up");
    }
  };

  return (
    <div className="bg-[#EBEBEB] p-2 md:p-3 pb-0 rounded-4xl w-full max-w-[500px] min-w-0">
      <div className="flex flex-col items-center px-6 md:px-12 bg-white rounded-4xl py-8 md:py-10">
        <div className="bg-[#f8f8f8] p-3 md:p-4 rounded-full w-fit flex items-center justify-center mb-4 md:mb-5">
          <img src={login} alt="Login" className="size-4 md:size-5" />
        </div>
        <h2 className="font-bold text-lg md:text-xl mb-1 text-center">Sign in to continue</h2>
        <p className="text-xs md:text-sm text-center">
          Sign in to access all the features on this app
        </p>
        <form className="mt-12 md:mt-16 flex flex-col gap-3 md:gap-4 w-full" onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Enter your email or username"
            name="emailOrUsername"
            id="emailOrUsername"
            label="Email or username"
            value={credentials.emailOrUsername}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            label="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button
            className="mb-3 md:mb-4 w-full bg-[#5057EA] text-white py-3 md:py-4 rounded-xl text-xs md:text-sm mt-1 disabled:bg-[#5057EA]/50 disabled:cursor-not-allowed transition-colors"
            disabled={
              !credentials.emailOrUsername.trim() ||
              !credentials.password.trim()
            }
          >
            Sign In
          </button>
        </form>
      </div>
      <p className="text-center py-3 md:py-4 text-xs md:text-sm px-2">
        Do not have and account?{" "}
        <button
          type="button"
          onClick={handleSwitchToSignUp}
          className="text-[#5057EA] font-semibold bg-transparent border-none cursor-pointer hover:underline transition-colors"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}

export default SignInForm;
