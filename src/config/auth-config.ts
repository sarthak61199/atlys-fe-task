import type { AuthMode, FormData } from "../types";

export const authConfig = {
  "sign-in": {
    title: "Sign in to continue",
    subtitle: "Sign in to access all the features on this app",
    buttonText: "Sign In",
    switchText: "Do not have and account?",
    switchLinkText: "Sign up",
    switchMode: "sign-up" as AuthMode,
    fields: ["emailOrUsername", "password"],
    validation: (data: FormData) => {
      if (!data.emailOrUsername.trim() || !data.password.trim()) {
        return "All fields are required";
      }
      return null;
    },
  },
  "sign-up": {
    title: "Create an account to continue",
    subtitle: "Create an account to access all the features on this app",
    buttonText: "Sign Up",
    switchText: "Already have an account?",
    switchLinkText: "Sign in",
    switchMode: "sign-in" as AuthMode,
    fields: ["emailOrUsername", "password", "repeatPassword"],
    validation: (data: FormData) => {
      if (
        !data.emailOrUsername.trim() ||
        !data.password.trim() ||
        !data.repeatPassword?.trim()
      ) {
        return "All fields are required";
      }
      if (data.password !== data.repeatPassword) {
        return "Passwords do not match";
      }
      return null;
    },
  },
} as const;

export const fieldConfig = {
  emailOrUsername: {
    type: "text" as const,
    placeholder: "Enter your email or username",
    label: "Email or username",
  },
  password: {
    type: "password" as const,
    placeholder: "Enter your password",
    label: "Password",
  },
  repeatPassword: {
    type: "password" as const,
    placeholder: "Enter your password again",
    label: "Repeat password",
  },
} as const;
