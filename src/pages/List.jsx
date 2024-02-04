import './list.css'
import {Button} from '../components/ui/button'
import {Input} from '../components/ui/input'
import {Car, Fuel, Gauge, Search, ListIcon, Banknote, Armchair, PlusSquare, Heart} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
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
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {getMarques, getCategories, getTransmissions, getCarburants} from "../services/index";

export default function List(){
    const [marques, setMarques] = useState([])
    const [transmission, setTransmission] = useState([])
    const [carburant, setCarburant] = useState([])
    const [categorie, setCategorie]= useState([])
    const [modele, setModele] = useState([])

    const [carb, setCarb] = useState([]);
    const [trans, setTrans] = useState([]);
    const [ma, setMa] = useState();
    const [cat, setCat] = useState();
    const [kmin, setKmin] = useState(null)
    const [kmax, setKmax] = useState(null)
    const [min, setMin] = useState(null)
    const [max, setMax] = useState(null)
    const [place, setPlace] = useState(null)

    const [search, setSearch] = useState("");

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
    }, []);

    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
        <>
            <div className="flex px-3 items-center mb-5">
                <Input className="w-[400px]" placeholder="Votre recherche ici ..." value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                <Button className="flex gap-2" variant="secondary"><Search width={15} /> Rechercher</Button>
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
                                    <Accordion type="multiple" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger><span className="flex items-center gap-4"><ListIcon absoluteStrokeWidth /> Marque & Modèle</span></AccordionTrigger>
                                            <AccordionContent>
                                                <Select >
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
                                                <Select disabled={modele.length <= 0}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Modèle" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="light">Light</SelectItem>
                                                        <SelectItem value="dark">Dark</SelectItem>
                                                        <SelectItem value="system">System</SelectItem>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="p-2 grid grid-cols-1 gap-1">
                        <div className="border p-5 flex lg:flex-row md:flex-col gap-3">
                           <div className="bg-gray-50 w-1/2">
                               <Carousel
                                   plugins={[
                                   Autoplay({
                                       delay: 3000,
                                       stopOnInteraction: true
                                   }),
                               ]}>
                                   <CarouselContent>
                                       <CarouselItem>
                                           <div className="lg:h-[300px]" style={{backgroundSize: 'cover',backgroundRepeat: 'no-repeat' ,backgroundImage: "url('https://www.stratstone.com/-/media/stratstone/porsche/new-cars/inline-images/911/porsche-911-turbo-720x405px.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=D299FB63E056C28BEECACD3F622D86A9')"}}/>
                                       </CarouselItem>
                                       <CarouselItem>
                                           <div className="lg:h-[300px]" style={{backgroundSize: 'cover',backgroundRepeat: 'no-repeat' ,backgroundImage: "url('https://www.stratstone.com/-/media/stratstone/porsche/new-cars/inline-images/911/porsche-911-turbo-720x405px.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=D299FB63E056C28BEECACD3F622D86A9')"}}/>
                                       </CarouselItem>
                                   </CarouselContent>

                               </Carousel>
                           </div>
                            <div className="w-1/2 flex flex-col justify-between">
                                <div className="h-[250px]">
                                    <div className="flex justify-between">
                                        <div className="w-[450px]">
                                            <h3 style={{textOverflow: 'ellipsis'}} className="overflow-hidden whitespace-nowrap scroll-m-20 text-2xl pb-2/3 font-semibold tracking-tight">Porsche 911 Turbo S </h3>
                                        </div>
                                        <div>
                                            <Heart className="cursor-pointer"/>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <p className="text-sm text-muted-foreground">45.000 Km | Diesel | Automatique</p>
                                    </div>
                                    <div>
                                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid aperiam at atque consequatur corporis deleniti deserunt dicta dolor dolores eius eligendi eos ex fugit laborum minima natus necessitatibus numquam officiis placeat possimus quaerat quas, qui reprehenderit sint sunt temporibus ullam vel veniam. Ad, amet, consequatur deleniti fugiat libero maiores, maxime minima nostrum officia provident quas ratione rem sed temporibus ullam? Consequuntur, deleniti distinctio esse odio odit officia quod sunt! A accusamus adipisci aperiam, delectus distinctio doloremque doloribus error in, laborum libero magni modi natus nemo nostrum numquam porro quae quam quas quos ratione repudiandae saepe sint sit sunt temporibus ullam, veritatis. Accusamus aliquam animi blanditiis culpa cum dicta dolorum ducimus ea earum, et facere fuga hic id impedit incidunt libero, magnam molestias natus nostrum odio officiis quasi, sequi sit temporibus unde voluptatem voluptatum. Architecto corporis delectus error illum non obcaecati porro recusandae sit tempora tenetur. Eaque et illo magni molestiae nisi placeat voluptate! Ducimus earum iusto laboriosam magni nam tempora? Asperiores at beatae error, neque nihil nisi obcaecati optio. Assumenda dignissimos dolorum eveniet nam nostrum perspiciatis praesentium quia quo! A assumenda eos explicabo hic impedit ipsam, quasi ut. Ab at consequuntur cupiditate doloremque eaque maxime, quibusdam repellendus vitae.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Link to="/detail/1"><Button>Détail</Button></Link>
                                    <h3 className="scroll-m-20 text-2xl pb-2/3 tracking-tight">{currencyFormat(120000000)} MGA </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}