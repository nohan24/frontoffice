import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {login} from "../services/index"
import {Loader2} from "lucide-react";
import {useState} from "react";
export default function Login(){
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState("")
    const [user, setUser] = useState("nohan@gmail.com");
    const [pass, setPass] = useState("root")
    function log(e){
        e.preventDefault();
        setDisable(true)
        var formData = new FormData();
        formData.set("email", user);
        formData.set("password", pass);

        login(formData).then((res) => {
            setError("");
            localStorage.setItem("auth", res.data.token);
            window.location.href = "/"
        }).catch((err) => {
            setError(err.response.data.message)
        }).finally(() => {
            setDisable(false)
        })
    }

    return(
        <div className="flex justify-center mt-12">
            <Card className="w-[550px]">
                <form onSubmit={(e) => {
                    log(e)
                }}>
                    <CardHeader>
                        <CardTitle>Connexion</CardTitle>
                        <CardDescription>Connectez-vous pour accéder à vos données.</CardDescription>
                        <p className="text-sm text-red-600">{error}</p>
                    </CardHeader>
                    <CardContent>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Email</Label>
                                    <Input name="email" type="email" value={user} onChange={(e) => {setUser(e.target.value)}}/>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="framework">Mot de passe</Label>
                                    <Input type="password" name="password" onChange={(e) => {setPass(e.target.value)}} value={pass}/>
                                </div>
                            </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" disabled={disable}><Loader2 className={!disable ? "hidden" : "mr-2 h-4 w-4 animate-spin"} /> Se connecter</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}