import React, { useContext } from "react";
import { ContextProvider } from "../Provider/Provider";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const ForgetPassword = () => {
  const { forget, setForget } = useContext(ContextProvider);
  const fromSubmit = (e) => {
    e.preventDefault();
    const email = forget;
    console.log(email);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email, we sent a reset password link");
      })
      .catch((error) => {
        toast.error("Error sending reset email: " + error.message);
      });
  };
  const handleChange = (e) => {
    setForget(e.target.value);
  };

  return (
    <div>
      <div className="h-[72px]">
        <Navbar />
      </div>
      <form
        onSubmit={fromSubmit}
        className="card-body max-w-md mx-auto h-[70vh]"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            value={forget}
            onChange={handleChange}
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Reset
          </button>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ForgetPassword;
