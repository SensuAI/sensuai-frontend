"use client"

import * as React from "react"
import { Flex, Heading, Text, Card, Badge, Link, Button, Grid, Box } from '@radix-ui/themes'
import { ScrollArea } from "@/components/ui/scroll-area"

import BackgroundSVG from "@/components/backgroundsvg"
import { Car } from "lucide-react"
import Plates from "@/components/plates"
import PlateInfo from "@/components/elements/plate_info"

import { getAllPlates } from "@/services/plate-service"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"


const platesData: any = [
    {plate: "R59-ADF",username: "Eduardo Bejarano", first_time_registered: "2023-10-18T22:31:44.764Z", promos: ["Promo 1", "Promo 2", "Promo 3"]},
    { plate: "NSF-133", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "ABC-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
    { plate: "FED-123", username: "user1", first_time_registered: "09/09/09", promos: ["Promo 1", "Promo 2", "Promo 3"] },
]

export default function ListingM() {
    const { toast } = useToast();
    const [dataPlates, setDataPlates] = React.useState<any>([]);
    const [numberPlates, setNumberPlates] = React.useState<any>(0);

    async function fetchPlates() {
        try {
            const Response: any = await getAllPlates();
            if(Response.status == "Success") {
                setDataPlates(Response.data.carPlates);
                setNumberPlates(Response.results);
            } else {
                toast({
                    description: "Error gettion plates",
                    duration: 5000,
                })
            }
        } catch (error) {
            toast({
                description: "Error gettion plates",
                duration: 5000,
            })
        }
    }

    useEffect(() => {
        fetchPlates();
    }, []);

    return (
        <main className="flex flex-col">
            <BackgroundSVG />
            <Heading align="center" mt="9">Clientes Identificados</Heading>
            <ScrollArea className="max-h-[400px] mt-6 rounded-md overflow-auto">
                <Flex justify="center" ml="4" mt="7">
                    <Flex gap="4" direction="column" justify="center">
                        <Grid columns="3" gap="3" width="auto">
                            {dataPlates.map((plate: any, index: any) => (
                                <PlateInfo
                                    key={index}
                                    id={plate._id ? plate._id : "Id no recuperado"}
                                    plate={plate.plate ? plate.plate : "Placa no registrada"}
                                    username={plate.username ? plate.username : "No registrado"}
                                    promos={["Descuento de 15% recargano 20L", "Entradas al cine dentro en la proxima visita", "Revisión de aceite gratis"]}
                                    first_time_registered={plate.first_time_registered ? plate.first_time_registered : "No registrado"}
                                />
                            ))}
                        </Grid>
                        <Flex justify="center" gap="4">
                        </Flex>
                    </Flex>
                </Flex>
            </ScrollArea>

            <Flex gap="4" direction="column" mt="8">
                <Flex className="space-x-4" justify="center" >
                    <Link
                        href={"/branch-stats"}
                    >{<Button variant="outline" size="3">
                        Ver Estadísticas Globales
                    </Button>}
                    </Link>
                    <Link
                        href={"/manager"}
                    >{<Button variant="outline" size="3">
                        Página anterior
                    </Button>}
                    </Link>
                </Flex>
            </Flex>
        </main>
    )
}

