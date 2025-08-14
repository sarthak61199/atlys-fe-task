import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import login from "../assets/icons/login.svg";
import { useAuth } from "../contexts/auth-context";
import { Input } from "./ui/input";

function SignInForm() {
  const navigate = useNavigate();

  const { signIn } = useAuth();
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
      navigate("/");
    }
  };

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
        <form className="mt-16 flex flex-col gap-4 w-full" onSubmit={onSubmit}>
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
          <button className="mb-4 w-full bg-[#5057EA] text-white py-4 rounded-xl text-sm mt-1">
            Sign In
          </button>
        </form>
      </div>
      <p className="text-center py-4 text-sm">
        Do not have and account?{" "}
        <Link to="/sign-up" className="text-[#5057EA] font-semibold">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default SignInForm;
