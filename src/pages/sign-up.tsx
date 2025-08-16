import AuthForm from "../components/auth-form";

function SignUp() {
  return (
    <main className="grid place-items-center h-full">
      <AuthForm mode="sign-up" />
    </main>
  );
}

export default SignUp;
