import {Link, useParams} from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    Next, Prev
} from "@/components/ui/carousel";
import {Button} from "@/components/ui/button";
import {KeySquare, Mail, MoreHorizontal, TextIcon, Undo2, Zap} from "lucide-react";

export default function Detail(){
    const {id} = useParams();
    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function km(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
    return(
        <>
            <div>
                <Link to="/" className="mx-5"><Button variant="link" className="underline"><Undo2 width={18} className="mr-2"/> Retourner vers les annonces.</Button></Link>
            </div>
            <div className="grid grid-cols-3 gap-2 p-5">
                <div className="col-span-2 p-5">
                    <div className="mx-10">
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="lg:h-[500px]" style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundImage:"url('https://images.caradisiac.com/logos-ref/modele/modele--volkswagen-golf-5/S7-modele--volkswagen-golf-5.jpg')"}}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="lg:h-[500px]" style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundImage:"url('https://images.caradisiac.com/logos-ref/modele/modele--volkswagen-golf-5/S7-modele--volkswagen-golf-5.jpg')"}}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="lg:h-[500px]" style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundImage:"url('https://images.caradisiac.com/logos-ref/modele/modele--volkswagen-golf-5/S7-modele--volkswagen-golf-5.jpg')"}}/>
                                </CarouselItem>
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
                                    Volkwagen
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Modèle
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    Golf
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Kilometrage
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    {km(12000)} Km
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Catégorie
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    Sport
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Année de sortie
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    2012
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Transmission
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    Manuelle
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Carburant
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    Essence
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Puissance fiscale
                                </span>
                                <span className=" font-semibold text-sm text-gray-800 col-span-1">
                                    12 Cv
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Puissance réelle
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    150 Ch
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Places
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    4
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Portes
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    2
                                </span>

                            </div>
                        </div>
                    </div>

                    <div className="mt-2">
                        <div className="px-5 py-4 mx-10" style={{background: '-webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#ededed))', color:' #4f4f4f'}}>
                            <h2 className="scroll-m-20 text-xl pb-2/3 font-semibold tracking-tight flex items-center gap-2"><Zap /> Batterie</h2>
                        </div>
                        <div className="border p-5 mx-10" style={{borderTop: 'none'}}>
                            <div className="grid grid-cols-2 gap-y-2">
                                <span className="text-sm text-gray-800 col-span-1">
                                    Marque
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    Volkwagen
                                </span>

                                <span className="text-sm text-gray-800 col-span-1">
                                    Modèle
                                </span>
                                <span className="font-semibold text-sm text-gray-800 col-span-1">
                                    Golf
                                </span>

                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="px-5 py-4 mx-10" style={{background: '-webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#ededed))', color:' #4f4f4f'}}>                            <h2 className="scroll-m-20 text-xl pb-2/3 font-semibold tracking-tight flex items-center gap-2"><KeySquare /> Equipements</h2>
                        </div>
                        <div className="border p-5 mx-10" style={{borderTop: 'none'}}>
                            equipement
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="px-5 py-4 mx-10" style={{background: '-webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#ededed))', color:' #4f4f4f'}}>                            <h2 className="scroll-m-20 text-xl pb-2/3 font-semibold tracking-tight flex items-center gap-2"><MoreHorizontal /> Description supplémentaire</h2>
                        </div>
                        <div className="border p-5 mx-10" style={{borderTop: 'none'}}>
                            descri
                        </div>
                    </div>
                </div>

                <div className="col-span-1 my-5">
                    <div className="w-full bg-gray-50 px-5 py-4" style={{background: '-webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#ededed))', color:' #4f4f4f'}}>
                        <h2 className="scroll-m-20 text-xl pb-2/3 font-semibold tracking-tight flex items-center gap-2">Golf V TDI 2.0 Sportback</h2>
                    </div>

                    <div className="p-5 border" style={{borderTop: 'none'}}>
                        <div className="mb-5">
                            <Button variant="orange" className="flex items-center gap-4"><Mail /> Contactez le propriétaire</Button>
                        </div>
                        <div>
                            <h3 className="scroll-m-20 text-xl pb-2/3 font-semibold text-center tracking-tight">Prix : {currencyFormat(120000000)} MGA </h3>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}