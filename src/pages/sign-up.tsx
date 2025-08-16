import AuthForm from "../components/auth-form";

function SignUp() {
  return (
    <main className="grid place-items-center h-full px-4 py-8">
      <AuthForm mode="sign-up" />
    </main>
  );
}

export default SignUp;
