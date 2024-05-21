import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate();

    function handleLoginState() {
        props.setLoginStatus(false);
    }

    return (
        <div className="navbar fixed top-0 left-0 right-0 bg-[#581b55] p-3 flex justify-between items-center z-10">
            <div onClick={() => navigate("/home")} className="cursor-pointer flex items-center">
                <img className="w-24" src="https://www.jiocinema.com/images/jc_logo_v2.svg" alt="logo" />
            </div>
            <Link to={props.loginStatus ? "/home/signup" : "/home/signin"}>
                <div
                    onClick={handleLoginState}
                    className="text-white bg-gray-500 border-2 border-gray-500 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-300"
                >
                    <span>{props.loginStatus ? "Sign out" : "Sign in"}</span>
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
