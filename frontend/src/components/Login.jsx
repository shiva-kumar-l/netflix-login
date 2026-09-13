import { useState } from "react";
import axios from "axios";

function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  setServerError("");

  if (!validateForm()) {
    return;
  }

  try {
    setLoading(true);

    console.log("API URL:", import.meta.env.VITE_API_URL);

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/login`,
      formData
    );

    if (response.data.success) {
      onLoginSuccess();
    }
  } catch (error) {
    if (error.response) {
      setServerError(error.response.data.message);
    } else {
      setServerError("Unable to connect to the server.");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="netflix-logo">NETFLIX</div>
      </header>

      {/* Login Container */}
      <main className="login-container">
        <div className="login-box">
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email or mobile number"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            {/* Server Error */}
            {serverError && (
              <p className="server-error">
                {serverError}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <span className="help-link">Need help?</span>
          </div>

          <div className="signup-section">
            <p>
              New to Netflix?
              <span className="signup-link"> Sign up now.</span>
            </p>

            <small>
              This page is protected by Google reCAPTCHA to ensure
              you're not a bot.
            </small>

            <small>
              Email: demo@gmail.com
Password: 123456
            </small>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;