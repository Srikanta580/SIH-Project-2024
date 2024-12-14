import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [role, setRole] = useState("user");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [formRes, setFormRes] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEmailLogin) {
      try {
        const res = await axios.post(
          "/api/v1/user-login",
          { email: formValues.email, password: formValues.password },
          { withCredentials: true }
        );
        console.log(res);
        navigate("/new-registration");
      } catch (error) {
        console.log(error);
      }
    } else {
      if (otpSent) {
        console.log("otp sent");
      } else {
        setOtpSent(true);
      }
    }
  };

  const handleSendOtp = async () => {
    if (isEmailLogin) {
      console.log(`Sending OTP to ${formValues.email}`);
    } else {
      console.log(`Sending OTP to ${formValues.phone}`);
      try {
        if (role === "admin") {
          const res = await axios.post(
            "/api/v1/admin-login",
            { username: formValues.username, password: formValues.password },
            { withCredentials: true }
          );
          console.log(res);
          setFormRes(res.data.response);
        } else if (role === "govt") {
          const res = await axios.post(
            "/api/v1/govt-login",
            { username: formValues.username, password: formValues.password },
            { withCredentials: true }
          );
          console.log(res);
          setFormRes(res.data.response);
        } else if (role === "user") {
          const res = await axios.post(
            "/api/v1/user-login-phone",
            { phone: formValues.phone },
            { withCredentials: true }
          );
          console.log(res);
          setFormRes(res.data.response);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setOtpSent(true);
  };

  const handleVerifyOtp = async () => {
    try {
      if (role === "admin") {
        const res = await axios.post(
          "/api/v1/admin-login/email-verify",
          { _id: formRes._id, inputOTP: otp },
          { withCredentials: true }
        );
        console.log(res);
        navigate("/admin");
      } else if (role === "govt") {
        const res = await axios.post(
          "/api/v1/govt-login/email-verify",
          { _id: formRes._id, inputOTP: otp },
          { withCredentials: true }
        );
        console.log(res);
        navigate("/govt");
      } else if (role === "user") {
        const res = await axios.post(
          "/api/v1/user-login-phone/verify-phone",
          { _id: formRes._id, inputOTP: otp },
          { withCredentials: true }
        );
        console.log(res);
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const greeting =
    {
      user: "Hello, User",
      admin: "Hello, Admin",
      govt: "Hello, Government Official",
    }[role] || "Hello";

  return (
    <div style={styles.container}>
      <h1 className="relative welcomeText text-[2.5rem] self-start before:absolute before:content-[''] before:w-20 before:h-1 before:-bottom-4 before:left-0 before:translate-x-0 before:bg-violet-500 mb-6">
        Login
      </h1>
      <div style={styles.card}>
        <div style={styles.formContainer}>
          {/* <h2 style={styles.header}>Sign In</h2> */}
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="role" style={styles.label}>
                Role:
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setOtpSent(false); // Reset OTP state on role change
                  setFormValues({
                    ...formValues,
                    email: "",
                    password: "",
                    username: "",
                  });
                  setIsEmailLogin(e.target.value === "user"); // Default to email login for user role
                }}
                style={styles.select}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="govt">Government</option>
              </select>
            </div>

            {role === "user" ? (
              <>
                {isEmailLogin ? (
                  <>
                    <div style={styles.formGroup}>
                      <label htmlFor="email" style={styles.label}>
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formValues.email}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            email: e.target.value,
                          })
                        }
                        style={styles.input}
                        required
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label htmlFor="password" style={styles.label}>
                        Password:
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={formValues.password}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            password: e.target.value,
                          })
                        }
                        style={styles.input}
                        required
                      />
                    </div>
                    <button type="submit" style={styles.submitButton}>
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    <div style={styles.formGroup}>
                      <label htmlFor="phone" style={styles.label}>
                        Phone:
                      </label>
                      <input
                        type="text"
                        id="phone"
                        value={formValues.phone}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            phone: e.target.value,
                          })
                        }
                        style={styles.input}
                        required
                      />
                    </div>
                    <button
                      type="button"
                      style={styles.otpButton}
                      onClick={handleSendOtp}
                    >
                      Continue
                    </button>
                  </>
                )}

                {!isEmailLogin && otpSent && (
                  <div style={styles.formGroup}>
                    <label htmlFor="otp" style={styles.label}>
                      OTP:
                    </label>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      style={styles.input}
                      placeholder="Enter the OTP"
                      required
                    />
                    <button
                      type="button"
                      style={styles.verifyOtpButton}
                      onClick={handleVerifyOtp}
                    >
                      Verify OTP
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div style={styles.formGroup}>
                  <label htmlFor="username" style={styles.label}>
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={formValues.username}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        username: e.target.value,
                      })
                    }
                    style={styles.input}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="password" style={styles.label}>
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formValues.password}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        password: e.target.value,
                      })
                    }
                    style={styles.input}
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={styles.submitButton}
                  onClick={handleSendOtp}
                >
                  Sign In
                </button>
                {otpSent && (
                  <div style={styles.formGroup} className="mt-5">
                    <label htmlFor="otp" style={styles.label}>
                      OTP:
                    </label>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      style={styles.input}
                      placeholder="Enter the OTP"
                      required
                    />
                    <button
                      type="button"
                      style={styles.verifyOtpButton}
                      onClick={handleVerifyOtp}
                    >
                      Verify OTP
                    </button>
                  </div>
                )}
              </>
            )}

            {role === "user" && (
              <p style={styles.toggleMethod}>
                {isEmailLogin
                  ? "Use phone number for OTP instead."
                  : "Use email/password instead."}
                <button
                  type="button"
                  style={styles.toggleButton}
                  onClick={() => setIsEmailLogin(!isEmailLogin)}
                >
                  Switch
                </button>
              </p>
            )}
          </form>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TqGDEZLmzospdqiDjEoFYuNddQjr5KKZGA&s"
            alt="Login"
            style={styles.image}
          />
          <div style={styles.infoTextContainer}>
            <h3 style={styles.infoHeader}>{greeting}</h3>
            <p style={styles.infoText}>
              Register with your personal details and start your journey with
              us.
            </p>
            <button
              style={styles.transparentButton}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    padding: "4rem",
    backgroundColor: "#f5f5f5",
    overflowY: "auto",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    maxWidth: "1000px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    maxHeight: "90vh",
  },
  formContainer: {
    width: "50%",
    padding: "40px",
    overflowY: "auto",
  },
  imageContainer: {
    width: "50%",
    backgroundColor: "#4CAF50",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  },
  image: {
    width: "80%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  infoTextContainer: {
    padding: "20px",
  },
  infoHeader: {
    marginBottom: "10px",
    fontSize: "18px",
    color: "#333",
  },
  infoText: {
    marginBottom: "15px",
    fontSize: "14px",
    color: "#555",
  },
  transparentButton: {
    padding: "10px",
    border: "2px solid #fff",
    borderRadius: "4px",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center",
  },
  header: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#8b5cf6",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  otpButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    marginBottom: "20px",
  },
  verifyOtpButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  toggleMethod: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
    textAlign: "center",
  },
  toggleButton: {
    marginLeft: "5px",
    color: "#007bff",
    background: "none",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;
