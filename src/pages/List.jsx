import {Button} from '../components/ui/button'
import {Input} from '../components/ui/input'
import {Car, Fuel, Gauge, Search, ListIcon, Banknote, Armchair, PlusSquare} from "lucide-react";
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

export default function List(){
    return(
        <>
            <div className="flex px-3 items-center mb-5">
                <Input className="w-[400px]" placeholder="Votre recherche ici ..."/>
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
                                            <AccordionTrigger><span className="flex items-center gap-4"><ListIcon /> Marque & Modèle</span></AccordionTrigger>
                                            <AccordionContent>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Choisissez une marque" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="light">Light</SelectItem>
                                                        <SelectItem value="dark">Dark</SelectItem>
                                                        <SelectItem value="system">System</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </AccordionContent>
                                            <AccordionContent>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Theme" />
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
                                            <AccordionTrigger><span className="flex items-center gap-4"><Fuel /> Carburant</span> </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-flow-row-dense grid-cols-2 gap-y-2">
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                                Essence
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                                Essence
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                                Diesel
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger><span className="flex items-center gap-4"><PlusSquare /> Transmission </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-flow-row-dense grid-cols-2 gap-y-2">

                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                                Automatique
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                                Sequentielle
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                                Automatique + Sequentielle
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-4">
                                            <AccordionTrigger><span className="flex items-center gap-4"><Car /> Catégorie </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-flow-row-dense grid-cols-2 gap-y-2">
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                                Essence
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                                Essence
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                                Diesel
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-5">
                                            <AccordionTrigger><span className="flex items-center gap-4"><Banknote /> Prix </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="mb-3">
                                                    <Label>Prix minimum :</Label>
                                                    <Input type="number" value={0} min={0}/>
                                                </div>

                                                <div>
                                                    <Label>Prix maximum :</Label>
                                                    <Input type="number" value={0} min={0}/>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-6">
                                            <AccordionTrigger><span className="flex items-center gap-4"><Armchair /> Places </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div>
                                                    <Label>Place minimum :</Label>
                                                    <Input type="number" value={1} min={1}/>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-7">
                                            <AccordionTrigger><span className="flex items-center gap-4"><Gauge /> Kilometrage </span></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="mb-3">
                                                    <Label>Minimum :</Label>
                                                    <Input type="number" value={0} min={0}/>
                                                </div>

                                                <div>
                                                    <Label>Maximum :</Label>
                                                    <Input type="number" value={0} min={0}/>
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
                        <div className="border p-5">
                            Voiture
                        </div>
                        <div className="border p-5">
                            Voiture
                        </div>
                        <div className="border p-5">
                            Voiture
                        </div>
                        <div className="border p-5">
                            Voiture
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}