import AuthForm from "../components/auth-form";

function SignIn() {
  return (
    <main className="grid place-items-center h-full px-4 py-8">
      <AuthForm mode="sign-in" />
    </main>
  );
}

export default SignIn;
