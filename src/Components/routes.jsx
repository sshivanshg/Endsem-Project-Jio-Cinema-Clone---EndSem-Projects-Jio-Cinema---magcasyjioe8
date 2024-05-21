import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import SignUpPage from "./signUp";
import LoginPage from "./login";
import HomePage from "./home";
import RootLayout from "../rootLayout";

const Routes = (props)=>{
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/home" replace />,
        },
        {
            path: "/home",
            element : <RootLayout loginStatus = {props.loginStatus} setLoginStatus = {props.setLoginStatus}/>,
            children: [
                {
                    path:"/home",
                    element:<HomePage loginStatus = {props.loginStatus}/>
                },
                
                {
                    path: "/home/signup",
                    element: <SignUpPage/>
                },
                {
                    path: "/home/signin",
                    element: <LoginPage setLoginStatus = {props.setLoginStatus}/>
                }
            ]
        },
        
    ])

    return (
        <>
        <RouterProvider router={router}/>
        
        
    
        </>
    );

};


export default Routes;