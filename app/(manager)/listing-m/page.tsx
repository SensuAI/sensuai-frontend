"use client"
import * as React from "react"
import { Flex, Heading, Text, Card, Badge, Link, Button, Grid, Box } from '@radix-ui/themes'
import { PersonIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { MoreHorizontal } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import BackgroundSVG from "@/components/backgroundsvg"
import { Car } from "lucide-react"
import EncapsulatedComponent from "@/components/plates"
import Plates from "@/components/plates"



export default function ListingM() {



    return (
        <main className="flex flex-col">
            <BackgroundSVG />

            <Heading align="center" mt="3">Clientes Identificados</Heading>

            <ScrollArea className="h-[400px] w-[1422px] rounded-md">

                <Flex justify="center" ml="4" mt="7">

                    <Flex gap="4" direction="column" justify="center">

                        <Grid columns="3" gap="3" width="auto">

                            <Plates plate="NSF-133" />
                            <Plates plate="ABC-123" />
                            <Plates plate="XYZ-456" />
                            <Plates plate="DEF-789" />
                            <Plates plate="GHI-321" />
                            <Plates plate="JKL-654" />
                            <Plates plate="MNO-987" />
                            <Plates plate="PQR-210" />
                            <Plates plate="STU-543" />
                            <Plates plate="VWX-876" />
                            <Plates plate="YZA-109" />
                            <Plates plate="QWE-246" />
                            <Plates plate="HJK-789" />
                            <Plates plate="LMN-456" />
                            <Plates plate="BVC-123" />
                            <Plates plate="RTY-987" />
                            <Plates plate="UIO-210" />
                            <Plates plate="ZXC-543" />
                            <Plates plate="POI-876" />
                            <Plates plate="FDS-109" />
                            <Plates plate="GHJ-654" />

                        </Grid>

                        <Flex justify="center" gap="4">


                            {/* <Link asChild>
                                <Button asChild size="4">

                                    <Card style={{ height: 180, width: 300 }}>

                                        <Flex width="100%" gap="4" direction="column">
                                            <Flex justify="center">
                                                <EyeOpenIcon className="flex" style={{ height: 22, width: 22 }} />
                                            </Flex>
                                            <Flex display="flex" justify="center">


                                                <Heading align="center" size="5">NSF-234</Heading>
                                            </Flex>
                                            <Flex gap="2" justify="center">
                                                <Badge color="blue">Nuevo registro</Badge>

                                            </Flex>
                                            <Text size="1" align="center">
                                                Selecciona aquí para ver.
                                            </Text>
                                        </Flex>
                                    </Card>
                                </Button>
                            </Link> */}

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
                <Flex className="space-x-4" justify="center">

                    <Link
                        href={"/listing"}
                    >{<Button variant="classic" className="w-72 h-72 text-3xl bg-blue-500 text-white rounded-lg hover:bg-red-700">
                        Cargar archivo para identificación
                    </Button>}
                    </Link>
                </Flex>
            </Flex>




        </main>
    )
}

