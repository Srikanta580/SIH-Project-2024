/* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [formValues, setFormValues] = useState({
//     email: "",
//     fullName: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [role, setRole] = useState("user");
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (formValues.password !== formValues.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     navigate("/login");
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.imageContainer}>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TqGDEZLmzospdqiDjEoFYuNddQjr5KKZGA&s"
//             alt="Signup"
//             style={styles.image}
//           />
//           <div style={styles.infoTextContainer}>
//             <h3 style={styles.infoHeader}>
//               Hello, {role.charAt(0).toUpperCase() + role.slice(1)}
//             </h3>
//             <p style={styles.infoText}>
//               Register with your personal details and start your journey with
//               us.
//             </p>
//           </div>
//         </div>
//         <div style={styles.formContainer}>
//           <h2 style={styles.header}>Sign Up</h2>
//           <form onSubmit={handleSubmit} style={styles.form}>
//             <div style={styles.formGroup}>
//               <label htmlFor="fullName" style={styles.label}>
//                 Full Name:
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 value={formValues.fullName}
//                 onChange={(e) =>
//                   setFormValues({ ...formValues, fullName: e.target.value })
//                 }
//                 style={styles.input}
//                 required
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label htmlFor="email" style={styles.label}>
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formValues.email}
//                 onChange={(e) =>
//                   setFormValues({ ...formValues, email: e.target.value })
//                 }
//                 style={styles.input}
//                 required
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label htmlFor="phone" style={styles.label}>
//                 Phone:
//               </label>
//               <div style={styles.countryCode}>+91</div>
//               <input
//                 type="text"
//                 id="phone"
//                 value={formValues.phone}
//                 onChange={(e) =>
//                   setFormValues({ ...formValues, phone: e.target.value })
//                 }
//                 style={{ ...styles.input, ...styles.phoneInput }}
//                 required
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label htmlFor="password" style={styles.label}>
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formValues.password}
//                 onChange={(e) =>
//                   setFormValues({ ...formValues, password: e.target.value })
//                 }
//                 style={styles.input}
//                 required
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label htmlFor="confirmPassword" style={styles.label}>
//                 Confirm Password:
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={formValues.confirmPassword}
//                 onChange={(e) =>
//                   setFormValues({
//                     ...formValues,
//                     confirmPassword: e.target.value,
//                   })
//                 }
//                 style={styles.input}
//                 required
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label htmlFor="role" style={styles.label}>
//                 Role:
//               </label>
//               <select
//                 id="role"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 style={styles.select}
//               >
//                 <option value="user">User</option>
//               </select>
//             </div>
//             <button type="submit" style={styles.submitButton}>
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     backgroundColor: "#f5f5f5",
//   },
//   card: {
//     display: "flex",
//     flexDirection: "row",
//     width: "80%",
//     maxWidth: "1000px",
//     backgroundColor: "white",
//     borderRadius: "8px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     overflow: "hidden",
//   },
//   imageContainer: {
//     width: "50%",
//     backgroundColor: "#b3e6b3",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//     textAlign: "center",
//   },
//   image: {
//     width: "80%",
//     maxWidth: "400px",
//     height: "auto",
//     borderRadius: "8px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     marginBottom: "20px",
//   },
//   infoTextContainer: {
//     padding: "20px",
//   },
//   infoHeader: {
//     marginBottom: "10px",
//     fontSize: "18px",
//     color: "#333",
//   },
//   infoText: {
//     marginBottom: "15px",
//     fontSize: "14px",
//     color: "#555",
//   },
//   formContainer: {
//     width: "50%",
//     padding: "40px",
//   },
//   header: {
//     marginBottom: "20px",
//     fontSize: "24px",
//     color: "#333",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   formGroup: {
//     marginBottom: "15px",
//     position: "relative",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     fontSize: "14px",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "4px",
//     border: "1px solid #ddd",
//     fontSize: "14px",
//   },
//   countryCode: {
//     position: "absolute",
//     display: "flex",
//     alignItems: "center",
//     top: "44%",
//     left: "5%",
//     padding: "0 10px",
//     backgroundColor: "#ddd",
//     height: "40px",
//     transform: "translate(-41%,-6%)",
//     border: "0.2px solid #aeadad",
//   },
//   phoneInput: {
//     padding: "10px 55px",
//   },
//   select: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "4px",
//     border: "1px solid #ddd",
//     fontSize: "14px",
//   },
//   submitButton: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#007bff",
//     border: "none",
//     borderRadius: "4px",
//     color: "white",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };

// export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [role, setRole] = useState("user");
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [showPhoneVerification, setShowPhoneVerification] = useState(false); // New state for showing phone verification
  const [formRes, setFormRes] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "/api/v1/user-register",
        {
          fullName: formValues.fullName,
          email: formValues.email,
          password: formValues.password,
        },
        { withCredentials: true }
      );

      setFormRes(res.data.response);
      setVerificationSent(true);
    } catch (error) {
      alert("Error sending verification email. Please try again.");
    }
  };

  const handleVerifyCode = async (event) => {
    event.preventDefault();
    console.log(formRes);
    try {
      const { _id } = formRes;
      const verificationRes = await axios.post(
        "/api/v1/user/email-verify",
        { _id: _id, inputOTP: verificationCode },
        { withCredentials: true }
      );

      console.log(verificationRes.data.response);

      console.log(verificationRes);
      // const isValid = await verifyCode(formValues.email, verificationCode);
      if (verificationRes) {
        alert("Email verified successfully! Now verify your phone number.");
        setShowPhoneVerification(true); // Show phone verification fields
      } else {
        alert("Invalid verification code. Please try again.");
      }
    } catch (error) {
      alert("Error verifying code. Please try again.");
    }
  };

  const handleSendOtp = async (event) => {
    event.preventDefault();
    try {
      const { _id } = formRes;
      const res = await axios.post(
        "/api/v1/user/add-phone",
        { _id: _id, phone: formValues.phone },
        { withCredentials: true }
      );
      console.log(res);
      setOtpSent(true);
    } catch (error) {
      alert("Error sending OTP. Please try again.");
    }
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    try {
      const { _id } = formRes;
      const isValid = await axios.post(
        "/api/v1/user/phone-verify",
        { _id: _id, inputOTP: otp },
        { withCredentials: true }
      );
      if (isValid) {
        alert(
          "Phone number verified successfully! Redirecting to dashboard..."
        );
        navigate("/login");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      alert("Error verifying OTP. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 className="relative welcomeText text-[2.5rem] self-start before:absolute before:content-[''] before:w-20 before:h-1 before:-bottom-4 before:left-0 before:translate-x-0 before:bg-violet-500 mb-6">
        Register
      </h1>
      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TqGDEZLmzospdqiDjEoFYuNddQjr5KKZGA&s"
            alt="Signup"
            style={styles.image}
          />
          <div style={styles.infoTextContainer}>
            <h3 style={styles.infoHeader}>
              Hello, {role.charAt(0).toUpperCase() + role.slice(1)}
            </h3>
            <p style={styles.infoText}>
              Register with details and start your journey with us.
            </p>
          </div>
        </div>
        <div style={styles.formContainer}>
          {/* <h2 style={styles.header}>Sign Up</h2> */}
          {!showPhoneVerification && (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label htmlFor="fullName" style={styles.label}>
                  Fullname:
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formValues.fullName}
                  onChange={(e) =>
                    setFormValues({ ...formValues, fullName: e.target.value })
                  }
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
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
                    setFormValues({ ...formValues, password: e.target.value })
                  }
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="confirmPassword" style={styles.label}>
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      confirmPassword: e.target.value,
                    })
                  }
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="role" style={styles.label}>
                  Role:
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={styles.select}
                >
                  <option value="user">User</option>
                </select>
              </div>
              <button type="submit" style={styles.submitButton}>
                Continue
              </button>
            </form>
          )}

          {verificationSent && !showPhoneVerification && (
            <div style={styles.verificationForm}>
              <h3 style={styles.verificationHeader}>Verify Your Email</h3>
              <form onSubmit={handleVerifyCode}>
                <div style={styles.formGroup}>
                  <label htmlFor="verificationCode" style={styles.label}>
                    Verification Code:
                  </label>
                  <input
                    type="text"
                    id="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    style={styles.input}
                    required
                  />
                </div>
                <button type="submit" style={styles.submitButton}>
                  Verify Email
                </button>
              </form>
            </div>
          )}

          {showPhoneVerification && (
            <div style={styles.verificationForm}>
              <h3 style={styles.verificationHeader}>
                Verify Your Phone Number
              </h3>
              <form onSubmit={handleSendOtp}>
                <div style={styles.formGroup}>
                  <label htmlFor="phone" style={styles.label}>
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={formValues.phone}
                    onChange={(e) =>
                      setFormValues({ ...formValues, phone: e.target.value })
                    }
                    style={styles.input}
                    required
                  />
                </div>
                <button type="submit" style={styles.submitButton}>
                  Send OTP
                </button>
              </form>

              {otpSent && (
                <form
                  onSubmit={handleVerifyOtp}
                  style={styles.verificationForm}
                >
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
                      required
                    />
                  </div>
                  <button type="submit" style={styles.submitButton}>
                    Verify OTP
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Mock functions for email and phone verification
const sendVerificationEmail = async (email) => {
  console.log(`Sending verification email to ${email}`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const verifyCode = async (email, code) => {
  console.log(`Verifying code ${code} for ${email}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(code === "123456");
    }, 1000);
  });
};

const sendOtp = async (phone) => {
  console.log(`Sending OTP to ${phone}`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const verifyOtp = async (phone, otp) => {
  console.log(`Verifying OTP ${otp} for ${phone}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(otp === "654321");
    }, 1000);
  });
};

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    backgroundColor: "#f5f5f5",
    padding: "4rem",
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
    marginTop: "20px",
  },
  infoHeader: {
    margin: "0",
    fontSize: "24px",
    color: "#fff",
    fontWeigth: "bold",
  },
  infoText: {
    fontSize: "16px",
    color: "#fff",
  },
  formContainer: {
    width: "50%",
    padding: "40px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
  },
  submitButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#8b5cf6",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  verificationForm: {
    marginTop: "20px",
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
  },
  verificationHeader: {
    margin: "0",
    fontSize: "20px",
    color: "#333",
  },
};

export default Signup;
