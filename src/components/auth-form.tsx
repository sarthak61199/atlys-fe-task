import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router";
import login from "../assets/icons/login.svg";
import { authConfig, fieldConfig } from "../config/auth-config";
import { useAuth } from "../contexts/auth-context";
import { Input } from "./ui/input";

export type AuthMode = "sign-in" | "sign-up";

export interface AuthFormProps {
  mode: AuthMode;
}

export interface FormData {
  emailOrUsername: string;
  password: string;
  repeatPassword?: string;
}

function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate();
  const { signIn, signUp, switchAuthMode, isDialogMode } = useAuth();
  const config = authConfig[mode];

  const [formData, setFormData] = useState<FormData>({
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

    const validationError = config.validation(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    let result: boolean;
    if (mode === "sign-in") {
      result = signIn(formData.emailOrUsername, formData.password);
    } else {
      result = signUp(formData.emailOrUsername, formData.password);
      if (!result) {
        setError("An account with this email already exists");
        return;
      }
    }

    if (result && !isDialogMode) {
      navigate("/");
    }
  };

  const handleSwitchMode = () => {
    if (isDialogMode) {
      switchAuthMode(config.switchMode);
    } else {
      navigate(config.switchMode === "sign-in" ? "/sign-in" : "/sign-up");
    }
  };

  const isFormValid = () => {
    return config.fields.every((field) => {
      const value = formData[field as keyof FormData];
      return value && value.trim();
    });
  };

  return (
    <div className="bg-[#EBEBEB] p-3 pb-0 rounded-4xl min-w-[500px]">
      <div className="flex flex-col items-center px-12 bg-white rounded-4xl py-10">
        <div className="bg-[#f8f8f8] p-4 rounded-full w-fit flex items-center justify-center mb-5">
          <img src={login} alt="Login" className="size-5" />
        </div>
        <h2 className="font-bold text-xl mb-1">{config.title}</h2>
        <p className="text-sm">{config.subtitle}</p>
        <form className="mt-16 flex flex-col gap-4 w-full" onSubmit={onSubmit}>
          {error && (
            <div className="text-red-500 text-sm text-center mb-2">{error}</div>
          )}
          {config.fields.map((fieldName) => {
            const field = fieldConfig[fieldName as keyof typeof fieldConfig];
            return (
              <Input
                key={fieldName}
                type={field.type}
                placeholder={field.placeholder}
                name={fieldName}
                id={fieldName}
                label={field.label}
                value={formData[fieldName as keyof FormData] || ""}
                onChange={handleChange}
              />
            );
          })}
          <button
            className="mb-4 w-full bg-[#5057EA] text-white py-4 rounded-xl text-sm mt-1 disabled:bg-[#5057EA]/50 disabled:cursor-not-allowed"
            disabled={!isFormValid()}
          >
            {config.buttonText}
          </button>
        </form>
      </div>
      <p className="text-center py-4 text-sm">
        {config.switchText}{" "}
        <button
          type="button"
          onClick={handleSwitchMode}
          className="text-[#5057EA] font-semibold bg-transparent border-none cursor-pointer hover:underline"
        >
          {config.switchLinkText}
        </button>
      </p>
    </div>
  );
}

export default AuthForm;
