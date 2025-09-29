import SignupForm from "../components/SignupForm";
import "./Auth.css";

export default function SignupPage() {
  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <SignupForm />
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}
