import {Link, Outlet} from "react-router-dom";
import { Separator } from "@/components/ui/separator"
import {Heart, LogIn, LogOut} from "lucide-react";
import logo from "../assets/fav.ico"
export default function Header(){
    return(
        <>
            <header className="px-4 lg:px-6 h-14 mb-5 flex items-center bg-gray-50">
                <Link className="flex items-center justify-center" to="#">
                    <img src={logo} width={50} alt="logo"/>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm text-red-500 font-medium underline-offset-4" to="#">
                        <div className="flex items-center gap-1">
                            <Heart color="red" width={18} /> Favoris
                        </div>
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                        <div className="flex items-center gap-2">
                            <LogIn width={18} /> Se connecter
                        </div>
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                        <div className="flex items-center gap-2">
                            <LogOut width={18} /> Se déconnecter
                        </div>
                    </Link>
                </nav>
            </header>
            <Separator/>
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}