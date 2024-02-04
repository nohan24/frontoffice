import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Undo2, Trash, Heart} from "lucide-react";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Favoris(){

    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <>
            <div className="flex items-center">
                <Link to="/" className="ms-5"><Button variant="link" className="underline"><Undo2 width={18} className="mr-2"/> Retourner vers les annonces.</Button></Link>
                <Button variant="danger" color="red" className="underline"><Trash width={18} className="mr-2"/> Vider les favoris</Button>
            </div>

            <div className="grid grid-cols-3 px-5 gap-y-2">

                <div className="col-span-3">
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

                                    </div>
                                    <div className="mb-5">
                                        <p className="text-sm text-muted-foreground">45.000 Km | Diesel | Automatique</p>
                                    </div>
                                    <div>
                                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid aperiam at atque consequatur corporis deleniti deserunt dicta dolor dolores eius eligendi eos ex fugit laborum minima natus necessitatibus numquam officiis placeat possimus quaerat quas, qui reprehenderit sint sunt temporibus ullam vel veniam. Ad, amet, consequatur deleniti fugiat libero maiores, maxime minima nostrum officia provident quas ratione rem sed temporibus ullam? Consequuntur, deleniti distinctio esse odio odit officia quod sunt! A accusamus adipisci aperiam, delectus distinctio doloremque doloribus error in, laborum libero magni modi natus nemo nostrum numquam porro quae quam quas quos ratione repudiandae saepe sint sit sunt temporibus ullam, veritatis. Accusamus aliquam animi blanditiis culpa cum dicta dolorum ducimus ea earum, et facere fuga hic id impedit incidunt libero, magnam molestias natus nostrum odio officiis quasi, sequi sit temporibus unde voluptatem voluptatum. Architecto corporis delectus error illum non obcaecati porro recusandae sit tempora tenetur. Eaque et illo magni molestiae nisi placeat voluptate! Ducimus earum iusto laboriosam magni nam tempora? Asperiores at beatae error, neque nihil nisi obcaecati optio. Assumenda dignissimos dolorum eveniet nam nostrum perspiciatis praesentium quia quo! A assumenda eos explicabo hic impedit ipsam, quasi ut. Ab at consequuntur cupiditate doloremque eaque maxime, quibusdam repellendus vitae.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Link to="/detail/1"><Button>Détail</Button></Link>
                                        <Button variant="destructive">Supprimer des favoirs</Button>
                                    </div>
                                    <h3 className="scroll-m-20 text-2xl pb-2/3 tracking-tight">{currencyFormat(120000000)} MGA </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-span-3">
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

                                    </div>
                                    <div className="mb-5">
                                        <p className="text-sm text-muted-foreground">45.000 Km | Diesel | Automatique</p>
                                    </div>
                                    <div>
                                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquid aperiam at atque consequatur corporis deleniti deserunt dicta dolor dolores eius eligendi eos ex fugit laborum minima natus necessitatibus numquam officiis placeat possimus quaerat quas, qui reprehenderit sint sunt temporibus ullam vel veniam. Ad, amet, consequatur deleniti fugiat libero maiores, maxime minima nostrum officia provident quas ratione rem sed temporibus ullam? Consequuntur, deleniti distinctio esse odio odit officia quod sunt! A accusamus adipisci aperiam, delectus distinctio doloremque doloribus error in, laborum libero magni modi natus nemo nostrum numquam porro quae quam quas quos ratione repudiandae saepe sint sit sunt temporibus ullam, veritatis. Accusamus aliquam animi blanditiis culpa cum dicta dolorum ducimus ea earum, et facere fuga hic id impedit incidunt libero, magnam molestias natus nostrum odio officiis quasi, sequi sit temporibus unde voluptatem voluptatum. Architecto corporis delectus error illum non obcaecati porro recusandae sit tempora tenetur. Eaque et illo magni molestiae nisi placeat voluptate! Ducimus earum iusto laboriosam magni nam tempora? Asperiores at beatae error, neque nihil nisi obcaecati optio. Assumenda dignissimos dolorum eveniet nam nostrum perspiciatis praesentium quia quo! A assumenda eos explicabo hic impedit ipsam, quasi ut. Ab at consequuntur cupiditate doloremque eaque maxime, quibusdam repellendus vitae.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Link to="/detail/1"><Button>Détail</Button></Link>
                                        <Button variant="destructive">Supprimer des favoirs</Button>
                                    </div>
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