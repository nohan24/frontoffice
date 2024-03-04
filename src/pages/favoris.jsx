import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Undo2, Trash, Heart} from "lucide-react";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {useEffect, useState} from "react";
import {favoris, removeFavoris} from "@/services/index";
import {cn} from "@/lib/utils";

export default function Favoris(){
    const [fav, setFav] = useState(null);
    useEffect(() => {
        favoris().then((res) => {
            setFav(res.data);
        })
    }, []);

    function retirer(car){
        let c = fav.filter((c) => c.voiture.id !== car.voiture.id);
        setFav(c)
        removeFavoris(car.voiture.id).catch(err => {
            console.log(err.response.data.message)
        });
    }

    function km(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <>
            <div className="flex items-center">
                <Link to="/" className="ms-5"><Button variant="link" className="underline"><Undo2 width={18} className="mr-2"/> Retourner vers les annonces.</Button></Link>
            </div>
            
            <div className="grid grid-cols-3 px-5 gap-y-2">

                {
                    fav == null ? <div className="flex mt-[200px] items-center col-span-3 justify-center">
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
                        fav.length > 0 ?
                            fav.map((a,i) => {
                                return(
                                    <div className="col-span-3">
                                        <div className="p-2 grid grid-cols-1 gap-1">
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
                                                                            <div className="lg:h-[350px]" style={{backgroundSize: 'cover',backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat' ,backgroundImage: "url('https://rest-production-c243.up.railway.app/images/"+ url +"')"}}/>
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
                                                        </div>
                                                        <div className="mb-5">
                                                            <p className="text-sm text-muted-foreground">{km(a.detailAnnonce.kilometrage)} Km | {a.detailAnnonce.carburant} | {a.detailAnnonce.transmission}</p>
                                                        </div>
                                                        <div>
                                                            <p className="card-description">{a.detailAnnonce.description_supplementaire}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <Link to={"/detail/" + a.voiture.id}><Button>Détail</Button></Link>
                                                            <Button variant="destructive" onClick={() => {
                                                                retirer(a);
                                                            }}>Retirer des favoirs</Button>
                                                        </div>
                                                        <h3 className="scroll-m-20 text-2xl pb-2/3 tracking-tight">{currencyFormat(a.voiture.prix)} MGA </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className="col-span-3">
                                <div className="flex mt-[200px] text-xl font-semibold justify-center">Pas de favoris.</div>
                            </div>
                }

            </div>
        </>
    )
}
