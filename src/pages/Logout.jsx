import {Navigate} from "react-router-dom";

export default function Logout(){
    localStorage.clear();
    window.location.href = "/"
}