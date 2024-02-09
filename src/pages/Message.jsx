import {ScrollArea} from "@/components/ui/scroll-area";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Send} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {chats, mess, send} from "@/services/index";
import {cn} from "@/lib/utils";

export default function Message(){
    var {user, username} = useParams();
    const [chat, setChats] = useState([]);
    const [messages, setMessages] = useState([])
    const [title, setTitle] = useState("")
    const [receive, setReceive] = useState(null)
    const [content, setContent] = useState("")
    const [disable, setDisable] = useState(false)
    const [load, setLoad] = useState(false)

    useEffect(() => {

        if(user !== undefined && username !== undefined){
            setTitle(username);
            setReceive(user)
                setLoad(true)
            mess(user).then((res) => {
                setMessages(res.data)
            }).finally(() => {setLoad(false)})
        }

        chats().then((res) => {
            setChats(res.data)
        }).catch((err) => {
            alert(err.response.data)
        })
    }, [])

    function loadMessage(c){
        setLoad(true)
        setMessages([])
        c.firstUserId.username !== "" ? setTitle(c.firstUserId.username) : setTitle(c.secondUserId.username);
        let i = c.firstUserId.username !== "" ? c.firstUserId.id_utilisateur : c.secondUserId.id_utilisateur;
        let v = c.firstUserId.username === "" ? c.firstUserId.id_utilisateur : c.secondUserId.id_utilisateur;
        setReceive(i)

        mess(i).then((res) => {
            setLoad(false)
            setMessages(res.data)
            endRef.current.scrollIntoView({ behavior: 'smooth' });
        })
    }

    const endRef = useRef(null);

    function sendMessage(e){
        e.preventDefault()
        if(content !== ""){
            let m = {
                receiverId: receive,
                messageContent: content
            }
            setDisable(true)
            send(m).then((res) => {
                let mes = messages
                mes.push(res.data)
                setMessages(mes)
                setContent("")
                chats().then((res) => {
                    setChats(res.data)
                }).catch((err) => {
                    alert(err.response.data)
                })
                endRef.current.scrollIntoView({ behavior: 'smooth' });
            }).catch((err) => {
                alert(err.response.data)
            }).finally(() => {
                setDisable(false)
            });

        }
    }
    return(
        <>
            <div className="grid grid-cols-3 gap-2 px-2">
                <div className="col-span-1 bg-gray-50">

                    <ScrollArea className="h-[88vh] rounded-md border p-2">
                        {
                            chat.map((c, i) => {
                                return(
                                    <div key={i} onClick={() => { loadMessage(c) }} className="p-3 border bg-white mb-2 cursor-pointer hover:bg-blue-50">
                                        <div className="mb-2">
                                            <b>{c.firstUserId.username === "" ? c.secondUserId.username : c.firstUserId.username}</b>
                                        </div>
                                        <div>
                                            {
                                                c.last_message
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </ScrollArea>
                </div>

                <div className="col-span-2">
                    <ScrollArea className="h-[88vh] rounded-md border">
                        {
                            title !== "" ?
                                <>
                                    <div className="p-4">
                                        <b>{title}</b>
                                    </div>

                                    <ScrollArea className="h-[70vh] border p-2" >
                                        {
                                            load === true ? <div className="flex items-center col-span-3 justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="50"
                                                        height="50"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className={cn("animate-spin")}
                                                    >
                                                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                                    </svg>
                                                </div> : ""
                                        }
                                        <div ref={endRef}>


                                        {
                                            messages.map((m, i) => {
                                                return(m.utilisateur.id_utilisateur === receive ?

                                                    <div key={i} className="max-w-[50%] bg-gray-100 mb-3">
                                                        <p className="p-3 rounded">
                                                            {m.messageContent}
                                                        </p>
                                                    </div>
                                                    :
                                                    <div key={i} className="ml-auto max-w-[50%] bg-blue-100 mb-3">
                                                        <p className="p-3 rounded">
                                                            {m.messageContent}
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>

                                    </ScrollArea>

                                    <div className="p-2">
                                        <form className="flex" onSubmit={(e) => sendMessage(e)}>
                                            <Input value={content} onChange={(e) => {
                                                setContent(e.target.value)
                                            }} placeholder="Votre message ..."/>
                                            <Button type="submit" disabled={disable} variant="secondary"><Send /></Button>
                                        </form>
                                    </div>
                                </>
                                : ""
                        }

                    </ScrollArea>
                </div>
            </div>
        </>
    )
}