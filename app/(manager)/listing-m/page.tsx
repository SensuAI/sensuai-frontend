"use client"

import * as React from "react"
import { Flex, Heading, Text, Card, Badge, Link, Button, Grid, Box } from '@radix-ui/themes'
import { ScrollArea } from "@/components/ui/scroll-area"

import BackgroundSVG from "@/components/backgroundsvg"
import { Car } from "lucide-react"
import Plates from "@/components/plates"

const platesData: any = [
    { plate: "NSF-133", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },    
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },    
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },    
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },    
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },
    { plate: "ABC-123", rowone: "Copiar placa registrada", rowtwo: "Cliente registrado" },    
]

export default function ListingM() {

    return (
        <main className="flex flex-col">
            <BackgroundSVG />
            <Heading align="center" mt="9">Clientes Identificados</Heading>
            <ScrollArea className="h-[400px] w-[1422px] mt-6 rounded-md">
                <Flex justify="center" ml="4" mt="7">
                    <Flex gap="4" direction="column" justify="center">
                        <Grid columns="3" gap="3" width="auto">
                            {platesData.map((plate:any, index:any) => (
                                <Plates
                                    key={index} // Asegúrate de proporcionar una clave única
                                    plate={plate.plate}
                                    rowone={plate.rowone}
                                    rowtwo={plate.rowtwo}
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
                    <Button variant="classic" className="w-72 h-72 text-3xl bg-blue-500 text-white rounded-lg hover:bg-red-700">
                        Ver Estadísticas Globales
                    </Button>
                    <Link
                        href={"/manager"}
                    >{<Button variant="classic" className="w-72 h-72 text-3xl bg-blue-500 text-white rounded-lg hover:bg-red-700">
                        Página anterior
                    </Button>}
                    </Link>
                </Flex>
            </Flex>
        </main>
    )
}

