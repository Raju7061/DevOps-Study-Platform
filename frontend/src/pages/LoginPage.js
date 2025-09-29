import LoginForm from "../components/LoginForm";
import "./Auth.css";

export default function LoginPage() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <LoginForm />
      <p>
        Don't have an account? <a href="/signup">Signup here</a>
      </p>
    </div>
  );
}
