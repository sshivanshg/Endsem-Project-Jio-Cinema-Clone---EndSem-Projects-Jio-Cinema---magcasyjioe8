import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("projectID", "17s6e2yqyk71");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name,
      email,
      password,
      appType: "ott"
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        requestOptions
      );
      const data = await response.json();
      if (data.status === "success") {
        navigate("/home/signin");
      } else {
        setErrorMessage(data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#0D0e10] flex justify-center items-center min-h-screen ">
      <div className="bg-[#0D0e10] p-8 rounded-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Create a new account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-2 py-2 rounded-md border-b border-gray-600 bg-[#0D0e10] text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-2 py-2 rounded-md border-b border-gray-600 bg-[#0D0e10] text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-2 py-2 rounded-md border-b border-gray-600 bg-[#0D0e10] text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <button type="submit" className="w-full py-2 bg-purple-700 text-white font-bold rounded-md hover:bg-purple-800 focus:outline-none">
            Continue
          </button>
          {errorMessage && (
            <div className="text-red-600 text-center mt-2">{errorMessage}</div>
          )}
        </form>
        <div className="text-12px text-white leading-tight sm:text-13px 2xl:text-sm mui-style-1okmvh8-termsText text-right">
          Already have an account?{" "}
          <Link to="/home/signin" className="text-blue-500 underline">
            Sign in here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
