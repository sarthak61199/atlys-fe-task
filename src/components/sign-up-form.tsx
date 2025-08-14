import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import login from "../assets/icons/login.svg";
import { useAuth } from "../contexts/auth-context";
import { Input } from "./ui/input";

function SignUpForm() {
  const navigate = useNavigate();
  const { signUp, switchAuthMode, isDialogMode } = useAuth();

  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (
      !formData.emailOrUsername.trim() ||
      !formData.password.trim() ||
      !formData.repeatPassword.trim()
    ) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    const result = signUp(formData.emailOrUsername, formData.password);

    if (result) {
      if (!isDialogMode) {
        navigate("/");
      }
    } else {
      setError("An account with this email already exists");
    }
  };

  const handleSwitchToSignIn = () => {
    if (isDialogMode) {
      switchAuthMode("sign-in");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div className="bg-[#EBEBEB] p-3 pb-0 rounded-4xl min-w-[500px]">
      <div className="flex flex-col items-center px-12 bg-white rounded-4xl py-10">
        <div className="bg-[#f8f8f8] p-4 rounded-full w-fit flex items-center justify-center mb-5">
          <img src={login} alt="Login" className="size-5" />
        </div>
        <h2 className="font-bold text-xl mb-1">
          Create an account to continue
        </h2>
        <p className="text-sm">
          Create an account to access all the features on this app
        </p>
        <form className="mt-16 flex flex-col gap-4 w-full" onSubmit={onSubmit}>
          {error && (
            <div className="text-red-500 text-sm text-center mb-2">{error}</div>
          )}
          <Input
            type="email"
            placeholder="Enter your email or username"
            name="emailOrUsername"
            id="emailOrUsername"
            label="Email or username"
            value={formData.emailOrUsername}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Enter your password again"
            name="repeatPassword"
            id="repeatPassword"
            label="Repeat password"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
          <button
            className="mb-4 w-full bg-[#5057EA] text-white py-4 rounded-xl text-sm mt-1 disabled:bg-[#5057EA]/50 disabled:cursor-not-allowed"
            disabled={
              !formData.emailOrUsername.trim() ||
              !formData.password.trim() ||
              !formData.repeatPassword.trim()
            }
          >
            Sign Up
          </button>
        </form>
      </div>
      <p className="text-center py-4 text-sm">
        Already have an account?{" "}
        {isDialogMode ? (
          <button
            type="button"
            onClick={handleSwitchToSignIn}
            className="text-[#5057EA] font-semibold bg-transparent border-none cursor-pointer hover:underline"
          >
            Sign in
          </button>
        ) : (
          <Link
            to="/sign-in"
            className="text-[#5057EA] font-semibold cursor-pointer hover:underline"
          >
            Sign in
          </Link>
        )}
      </p>
    </div>
  );
}

export default SignUpForm;
