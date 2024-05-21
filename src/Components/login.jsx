import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [appType, setAppType] = useState("ott");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("projectID", "17s6e2yqyk71");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email,
      password,
      appType,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        requestOptions
      );
      const data = await response.json();
      console.log(data.status);
      if (data.status === "success") {
        navigate("/home");
        props.setLoginStatus(true);
      } else {
        setErrorMessage("Wrong Credentials!");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black flex justify-center items-center min-h-screen">
      <div className="p-8 rounded-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          Sign in to continue
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-2 py-2 rounded-md text-sm border-b border-gray-600 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-2 py-2 rounded-md text-sm border-b border-gray-600 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none"
          >
            Continue
          </button>
          {errorMessage && (
            <div className="text-red-600 text-center mt-2">{errorMessage}</div>
          )}
        </form>
        <div className="text-xs text-white text-right mt-4">
          New to JioCinema?{" "}
          <Link to="/home/signup" className="text-blue-500 underline">
            Sign Up here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
