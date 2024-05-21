import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbar";

export default function RootLayout(props) {
    return (
        <>
        <Navbar loginStatus = {props.loginStatus} setLoginStatus = {props.setLoginStatus}/>
        <Outlet/>
        </>
    )
}