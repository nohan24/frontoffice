import './list.css'
import {Button} from '../components/ui/button'
import {Input} from '../components/ui/input'
import {Car, Fuel, Gauge, Search, ListIcon, Banknote, Armchair, PlusSquare, Heart} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';
import {
    Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue,
}  from "../components/ui/select";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";

import {Label} from "../components/ui/label";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {filtrer, searchs, removeFavoris ,addFavoris, getMarques, getCategories, getTransmissions, getCarburants, getModeles, getAnnonces} from "../services/index";

export default function List(){
    const [annonces, setAnnonces] = useState(null)

    const [marques, setMarques] = useState([])
    const [transmission, setTransmission] = useState([])
    const [carburant, setCarburant] = useState([])
    const [categorie, setCategorie]= useState([])
    const [modele, setModele] = useState([])

    const [carb, setCarb] = useState([]);
    const [trans, setTrans] = useState([]);
    const [ma, setMa] = useState('');
    const [mo, setMo] = useState('');
    const [cat, setCat] = useState([]);
    const [kmin, setKmin] = useState('')
    const [kmax, setKmax] = useState('')
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [place, setPlace] = useState('')

    const [search, setSearch] = useState("");

    function km(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    function fav(car){
        let a = []
        a = annonces.map((o)=> {
            if(o.voiture.id === car.voiture.id){
                return {...o, favorite: !car.favorite}
            }
            return o
        })
        setAnnonces(a)
        car.favorite = !car.favorite;
        if(car.favorite){
            addFavoris(car.voiture.id).then(r => console.log("")).catch((err)=> {
                console.log(err.response.data.message)
            });
        }else{
            removeFavoris(car.voiture.id).catch(err => {
                console.log(err.response.data.message)
            });
        };
    }

    useEffect(() => {
        getMarques().then((res) => {
            setMarques(res.data);
        })

        getCarburants().then((res) => {
            setCarburant(res.data)
        })

        getTransmissions().then((res) => {
            setTransmission(res.data)
        })

        getCategories().then((res) => {
            setCategorie(res.data)
        })

        getAnnonces().then((res) => {
            setAnnonces(res.data)
        })
    }, []);

    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function recherche(){
        setAnnonces(null)
        if(search === ""){
            getAnnonces().then((res) => {
                setAnnonces(res.data)
            })
        }else{

        searchs(search).then((res) => {
            setAnnonces(res.data)
        }).catch((err) => {
            alert(err.response.data)
        })
        }
    }

    function avance(){
        let s = {
            marque: ma,
            transmission: trans,
            modele: mo,
            categorie: cat,
            carburant: carb,
            prixmin: min !== "" ? parseInt(min) : 0,
            prixmax: !isNaN(parseInt(max)) ? parseInt(max) : 100000000000,
            kmin: !isNaN(parseInt(kmin)) ? parseInt(kmin): 0,
            kmax: !isNaN(parseInt(kmax)) ? parseInt(kmax) : 10000000,
            place: !isNaN(parseInt(place)) ? parseInt(place) : 1
        }
        setAnnonces(null)
        filtrer(s).then((res) => {
            setAnnonces(res.data)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
    return(
        <>

            <div className="flex px-3 items-center mb-5">
                <Input className="w-[400px]" placeholder="Votre recherche ici ..." value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                <Button className="flex gap-2" variant="secondary" onClick={() => {
                    recherche()
                }}><Search width={15} /> Rechercher</Button>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-1">
                <div className="md:col-span-1">
                    <div className="px-2 py-2">
                        <div className="border">
                            <div>
                                <h2 className="text-center bg-gray-50 px-5 py-3 scroll-m-20 text-[1rem] tracking-tight transition-colors first:mt-0">
                                    Filtrer les recherches
                                </h2>

                                <div className="px-2">
                                    <Accordion  type="multiple" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger><span className="flex items-center gap-4"><ListIcon absoluteStrokeWidth /> Marque & Modèle</span></AccordionTrigger>
                                            <AccordionContent>

                                                <Select value={ma} onValueChange={(e) => {
                                                    setMa(e)
                                                    getModeles(e).then((res) => {
                                                        setModele(res.data)
                                                    })
                                                }}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Choisissez une marque" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {
                                                            marques.map((m,i) => {
                                                                return(
                                                                    <SelectItem key={i} value={m.marque}>{m.marque}</SelectItem>
                                                                )
                                                            })
                                                        }
                                                    </SelectContent>
                                                </Select>
                                            </AccordionContent>
                                            <AccordionContent>
                                                <Select value={mo} onValueChange={(e) => {
                                                    setMo(e)
                                                }} disabled={modele.length <= 0}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Modèle" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {
                                                            modele.map((m,i) => {
                                                                return(
                                                                    <SelectItem key={i} value={m.modele}>{m.modele}</SelectItem>
                                                                )
                                                            })
                                                        }
                                                    </SelectContent>
                                                </Select>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger><span className="flex items-center gap-4"><Fuel absoluteStrokeWidth/> Carburant</span> </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-flow-row-dense grid-cols-2 gap-y-2">
                                                {
                                                    carburant.map((c, i) => {
                                                        return(
                                                                <div  key={i} className="relative flex gap-x-3">
                                                                    <div className="flex h-6 items-center">
                                                                        <input
                                                                            onClick={(e) => {
                                                                                return e.target.checked
                                                                                    ? setCarb([...carb, e.target.value])
                                                                                    : setCarb(
                                                                                        carb?.filter(
                                                                                            (value) => value !== e.target.value
                                                                                        )
                                                                                    )
                                                                            }}
                                                                            name="carburant"
                                                                            type="checkbox"
                                                                            value={c.carburant}
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                        />
                                                                    </div>
                                                                    <div className="text-sm leading-6">
                                                                        <label htmlFor="comments" className="font-medium text-gray-900">
                                                                            {c.carburant}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                        )
                                                    })
                                                }
                                                </div>

                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger><span className="flex items-center gap-4"><PlusSquare /> Transmission </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-flow-row-dense grid-cols-2 gap-y-2">
                                                {
                                                    transmission.map((c, i) => {
                                                        return(
                                                                <div  key={i} className="relative flex gap-x-3">
                                                                    <div className="flex h-6 items-center">
                                                                        <input
                                                                            onClick={(e) => {
                                                                                return e.target.checked
                                                                                    ? setTrans([...trans, e.target.value])
                                                                                    : setTrans(
                                                                                        trans?.filter(
                                                                                            (value) => value !== e.target.value
                                                                                        )
                                                                                    )
                                                                            }}
                                                                            name="transmission"
                                                                            type="checkbox"
                                                                            value={c.transmission}
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                        />
                                                                    </div>
                                                                    <div className="text-sm leading-6">
                                                                        <label htmlFor="comments" className="font-medium text-gray-900">
                                                                            {c.transmission}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                        )
                                                    })
                                                }
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-4">
                                            <AccordionTrigger><span className="flex items-center gap-4"><Car /> Catégorie </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-flow-row-dense grid-cols-2 gap-y-2">
                                                    {
                                                        categorie.map((c, i) => {
                                                            return(
                                                                <div  key={i} className="relative flex gap-x-3">
                                                                    <div className="flex h-6 items-center">
                                                                        <input
                                                                            onClick={(e) => {
                                                                                return e.target.checked
                                                                                    ? setCat([...cat, e.target.value])
                                                                                    : setCat(
                                                                                        cat?.filter(
                                                                                            (value) => value !== e.target.value
                                                                                        )
                                                                                    )
                                                                            }}
                                                                            name="categorie"
                                                                            type="checkbox"
                                                                            value={c.categorie}
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                        />
                                                                    </div>
                                                                    <div className="text-sm leading-6">
                                                                        <label htmlFor="comments" className="font-medium text-gray-900">
                                                                            {c.categorie}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-5">
                                            <AccordionTrigger><span className="flex items-center gap-4"><Banknote /> Prix </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="mb-3">
                                                    <Label>Prix minimum :</Label>
                                                    <Input type="number" value={min} onChange={(e) => {setMin(e.target.value)}} min={0}/>
                                                </div>

                                                <div>
                                                    <Label>Prix maximum :</Label>
                                                    <Input type="number" value={max} onChange={(e) => {setMax(e.target.value)}} min={0}/>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-6">
                                            <AccordionTrigger><span className="flex items-center gap-4"><Armchair /> Places </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div>
                                                    <Label>Place minimum :</Label>
                                                    <Input type="number" value={place} onChange={(e) => {
                                                        setPlace(e.target.value)
                                                    }} min={1}/>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-7">
                                            <AccordionTrigger><span className="flex items-center gap-4"><Gauge /> Kilometrage </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="mb-3">
                                                    <Label>Minimum :</Label>
                                                    <Input type="number" value={kmin} min={0} onChange={(e) => {
                                                        setKmin(e.target.value)
                                                    }}/>
                                                </div>

                                                <div>
                                                    <Label>Maximum :</Label>
                                                    <Input type="number" value={kmax} min={0} onChange={(e) => {
                                                        setKmax(e.target.value)
                                                    }}/>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <Button className="flex gap-2 mt-2" variant="secondary" onClick={() => {
                                        avance()
                                    }}><Search width={15}  /> Rechercher</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    annonces == null ? <div className="flex items-center col-span-3 justify-center">
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
                    </div> :
                               <div className="md:col-span-3 md:col-start-2">
                                   { annonces.map((a, i) => {
                           return(
                                   <div key={i} className="p-2 grid grid-cols-1 gap-1">
                                       <div className="border p-5 flex lg:flex-row md:flex-col gap-3">
                                           <div className="bg-gray-50 w-1/2">
                                               <Carousel
                                                   plugins={[
                                                       Autoplay({
                                                           delay: 4000
                                                       }),
                                                   ]}>
                                                   <CarouselContent>
                                                       {
                                                           a.detailAnnonce.images.map((url, i) => {
                                                               return(
                                                               <CarouselItem key={i}>
                                                                   <div className="lg:h-[350px]" style={{backgroundSize: 'contain',backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat' ,backgroundImage: "url('https://rest-production-c243.up.railway.app/images/"+ url +"')"}}/>
                                                               </CarouselItem>
                                                               )
                                                           })
                                                       }
                                                   </CarouselContent>

                                               </Carousel>
                                           </div>
                                           <div className="w-1/2 flex flex-col justify-between">
                                               <div className="h-[250px]">
                                                   <div className="flex justify-between">
                                                       <div className="w-[450px]">
                                                           <h3 style={{textOverflow: 'ellipsis'}} className="overflow-hidden whitespace-nowrap scroll-m-20 text-2xl pb-2/3 font-semibold tracking-tight">{a.detailAnnonce.titre_voiture}</h3>
                                                       </div>
                                                       <div>
                                                           {
                                                               localStorage.getItem("auth") != null ?  <Heart onClick={() => {
                                                                    fav(a)
                                                               }} className="cursor-pointer" fill={a.favorite ? "red": "none"} color={a.favorite ? "red": "#333"} /> : ""
                                                           }
                                                       </div>
                                                   </div>
                                                   <div className="mb-5">
                                                       <p className="text-sm text-muted-foreground">{km(a.detailAnnonce.kilometrage)} Km | {a.detailAnnonce.carburant} | {a.detailAnnonce.transmission}</p>
                                                   </div>
                                                   <div>
                                                       <p className="card-description">{a.detailAnnonce.description_supplementaire}</p>
                                                   </div>
                                               </div>
                                               <div className="flex items-center justify-between">
                                                   <Link to={"/detail/" + a.voiture.id}><Button>Détail</Button></Link>
                                                   <h3 className="scroll-m-20 text-2xl pb-2/3 tracking-tight">{currencyFormat(a.voiture.prix)} MGA </h3>
                                               </div>
                                           </div>
                                       </div>
                                 </div>
                           )
                       })}</div>
                }

            </div>
        </>
    )
}