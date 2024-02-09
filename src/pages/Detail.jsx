import {Link, redirect, useParams} from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    Next, Prev
} from "@/components/ui/carousel";
import {Button} from "@/components/ui/button";
import {Check, KeySquare, Mail, MoreHorizontal, TextIcon, Undo2, Zap} from "lucide-react";
import {fiche} from "../services/index";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
export default function Detail(){
    const {id} = useParams();
    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function km(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    const [detail, setDetail] = useState(null)
    useEffect(() => {
        fiche(id).then((res) => {
            setDetail(res.data)
        })
    }, []);
    return(
        <>
            <div>
                <Link to="/" className="mx-5"><Button variant="link" className="underline"><Undo2 width={18} className="mr-2"/> Retourner vers les annonces.</Button></Link>
            </div>
            <div className="grid grid-cols-3 gap-2 p-5">
                {
                    detail != null ? <>
                        <div className="col-span-2 p-5">
                            <div className="mx-10">
                                <Carousel>
                                    <CarouselContent>
                                        {
                                            detail.detailAnnonce.images.map((url, i) => {
                                                return(
                                                    <CarouselItem key={i}>
                                                        <div className="lg:h-[500px]" style={{backgroundSize: 'cover',backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat' ,backgroundImage: "url('https://rest-production-9975.up.railway.app/images/"+ url +"')"}}/>
                                                    </CarouselItem>
                                                )
                                            })
                                        }
                                    </CarouselContent>
                                    <Prev />
                                    <Next />
                                </Carousel>
                            </div>
                            <div className="mt-2">
                                <div className="px-5 py-4 mx-10" style={{background: '-webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#ededed))', color:' #4f4f4f'}}>                            <h2 className="scroll-m-20 text-xl pb-2/3 font-semibold tracking-tight flex items-center gap-2"><TextIcon /> Informations</h2>
                                </div>
                                <div className="border p-5 mx-10" style={{borderTop: 'none'}}>
                                    <div className="grid grid-cols-2 gap-y-2">
                                <span className="text-sm text-gray-800 col-span-1">
                                    Marque
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.marque}
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Modèle
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.modele}
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Kilometrage
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {km(detail.detailAnnonce.kilometrage)} Km
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Catégorie
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.categorie}
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Année de sortie
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.annee_fabrication}
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Transmission
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.transmission}
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Carburant
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.carburant}
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Puissance fiscale
                                </span>
                                        <span className=" font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.puissance_fiscale} Cv
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Puissance réelle
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.puissance_reelle} Ch
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Places
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.places}
                                </span>

                                        <span className="text-sm text-gray-800 col-span-1">
                                    Portes
                                </span>
                                        <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailAnnonce.portes}
                                </span>

                                    </div>
                                </div>
                            </div>

                            {
                                detail.detailelectrique != null ?
                                    <div className="mt-2">
                                        <div className="px-5 py-4 mx-10" style={{background: '-webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#ededed))', color:' #4f4f4f'}}>
                                            <h2 className="scroll-m-20 text-xl pb-2/3 font-semibold tracking-tight flex items-center gap-2"><Zap /> Batterie</h2>
                                        </div>
                                        <div className="border p-5 mx-10" style={{borderTop: 'none'}}>
                                            <div className="grid grid-cols-2 gap-y-2">
                                <span className="text-sm text-gray-800 col-span-1">
                                    Capacité
                                </span>
                                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailelectrique.capacite} kWh
                                </span>

                                                <span className="text-sm text-gray-800 col-span-1">
                                    Consommation
                                </span>
                                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {detail.detailelectrique.consommation} kWh / 100 Km
                                </span>

                                            </div>
                                        </div>
                                    </div>
                                    : ""
                            }


                            <div className="mt-3">
                                <div className="px-5 py-4 mx-10" style={{background: '-webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#ededed))', color:' #4f4f4f'}}>                            <h2 className="scroll-m-20 text-xl pb-2/3 font-semibold tracking-tight flex items-center gap-2"><KeySquare /> Equipements</h2>
                                </div>
                                <div className="border p-5 mx-10" style={{borderTop: 'none'}}>
                                    <div className="grid grid-cols-3 gap-y-2">
                                        {
                                            detail.detailAnnonce.equipement.map((e,i) => {
                                                return(
                                                    <span key={i} className="flex items-center gap-2 text-sm text-gray-800">
                                                        <Check color="green" size={16} /> {e}
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            {
                                detail.detailAnnonce.description_supplementaire !== '' ?
                                    <div className="mt-3">
                                        <div className="px-5 py-4 mx-10" style={{background: '-webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#ededed))', color:' #4f4f4f'}}>
                                            <h2 className="scroll-m-20 text-xl pb-2/3 font-semibold tracking-tight flex items-center gap-2"><MoreHorizontal /> Description supplémentaire</h2>
                                        </div>
                                        <div className="border p-5 mx-10" style={{borderTop: 'none'}}>
                                            {detail.detailAnnonce.description_supplementaire}
                                        </div>
                                    </div> :
                                    ""
                            }


                        </div>

                        <div className="col-span-1 my-5">
                            <div className="w-full bg-gray-50 px-5 py-4" style={{background: '-webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#ededed))', color:' #4f4f4f'}}>
                                <h2 className="scroll-m-20 text-xl pb-2/3 font-semibold tracking-tight flex items-center gap-2">{detail.detailAnnonce.titre_voiture}</h2>
                            </div>

                            <div className="p-5 border" style={{borderTop: 'none'}}>
                                <div className="mb-5">
                                    <Button variant="orange" onClick={() => {
                                        window.location.href = "/message/"+ detail.voiture.owner + "/" + detail.voiture.username
                                    }} className="flex items-center gap-4"><Mail /> Contacter le propriétaire</Button>
                                </div>
                                <div>
                                    <h3 className="scroll-m-20 text-xl pb-2/3 font-semibold text-center tracking-tight">Prix : {currencyFormat(detail.voiture.prix)} MGA </h3>
                                </div>
                            </div>

                        </div></> :
                        <div className="flex items-center col-span-3 justify-center">
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
                        </div>
                }

            </div>
        </>
    )
}