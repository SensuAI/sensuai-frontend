"use client"
import * as React from "react"
import { Container, Flex, Heading, Text, Card, Badge, Link, Button } from '@radix-ui/themes'
import { ChatBubbleIcon, HomeIcon, PersonIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { ScrollArea } from "@/components/ui/scroll-area"

import BackgroundSVG from "@/components/backgroundsvg"

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import BranchForm from "@/components/form/BranchForm"
import { DataTableB } from "@/components/admin-branches/data-table"
import { DataTableM } from "@/components/admin-managers/data-table"
import { Branch, columns } from "@/components/admin-branches/columns"
import { Manager, columnsM } from "@/components/admin-managers/columns"
import ManagerForm from "@/components/form/ManagerForm"
import Head from "next/head"



const data: Branch[] = [
    {

        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",

        name: "Toluca Centro",
        state: "EDOMEX",
        city: "Toluca",
        street: "Centro Histórico #54",
        postal_code: "03456",
        phone: "5576987398",
        id_manager: "2" //


    },
    {

        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",

        name: "Toluca Marquesa",
        state: "EDOMEX",
        city: "Toluca",
        street: "Carretera Lololol 116",
        postal_code: "03456",
        phone: "5576987398",
        id_manager: "7" //


    },
    {

        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",

        name: "Pachuca 3",
        state: "Hidalgo",
        city: "Pachuca",
        street: "General Anaya #54",
        postal_code: "03456",
        phone: "5576987398",
        id_manager: "10" //


    },

]

const dataM: Manager[] = [

    {
        amount: 316,
        status: "success",

        first_name: "Biología",
        last_name: "Cortez",
        email: "ken99@yahoo.com",
        hashed_password: "jiji",
        role: "MANAGER",

    },
    {
        amount: 316,
        status: "success",

        first_name: "Biología",
        last_name: "Cortez",
        email: "ken99@yahoo.com",
        hashed_password: "jiji",
        role: "MANAGER",

    },
    {
        amount: 316,
        status: "success",

        first_name: "Biología",
        last_name: "Cortez",
        email: "ken99@yahoo.com",
        hashed_password: "jiji",
        role: "MANAGER",

    }
]

export default function ListingM() {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        // getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    const [showTableBranches, setShowTableBranches] = React.useState(false);
    const [showTableManagers, setShowTableManagers] = React.useState(false);

    const [showFormBranch, setShowFormBranch] = React.useState(false);
    const [showFormManager, setShowFormManager] = React.useState(false);

    const [showHeading, setShowHeading] = React.useState(true);


    const handleListBranches = () => {
        setShowTableBranches(true);
        setShowTableManagers(false);

        setShowFormBranch(false);
        setShowHeading(false);
        setShowFormManager(false);

    };

    const handleFormBranch = () => {
        setShowFormBranch(true);
        setShowFormManager(false);
        setShowTableBranches(false);
        setShowTableManagers(false);
        setShowHeading(false);
    };
    const handleListManagers = () => {
        setShowTableManagers(true);
        setShowTableBranches(false);
        setShowFormBranch(false);
        setShowFormManager(false);
        setShowHeading(false);
    };

    const handleFormManager = () => {
        setShowFormManager(true);
        setShowFormBranch(false);
        setShowTableBranches(false);
        setShowTableManagers(false);
        setShowHeading(false);
    };


    return (
        <main className="flex flex-col">
            <BackgroundSVG />

            <Heading align="center" mt="3">Placas Detectadas</Heading>

            <ScrollArea className="h-[667px] w-[1422px] rounded-md">

                <Flex justify="center" ml="4" mt="7">

                    <Flex gap="4" direction="column" justify="center">
                        <Flex justify="center" gap="4">

                            <Link asChild>
                                <Button asChild size="4" onClick={handleListBranches}>

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
                            </Link>
                            <Link asChild>
                <Button asChild size="4" onClick={handleListBranches}>
                    
                  <Card style={{ height: 180, width: 300 }}>

                    <Flex width="100%" gap="4" direction="column">
                        <Flex justify="center">
                    <EyeOpenIcon className="flex" style={{ height: 22, width: 22 }}/>
                     </Flex>
                      <Flex display="flex" justify="center">
                        
                        
                        <Heading align="center"size="5">PAY-321</Heading>
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
              </Link>
                        </Flex>


                        <Link>

                            <Button asChild size="4" color="cyan" onClick={handleListManagers}>
                                <Card style={{ height: 150, width: 350 }}>

                                    <Flex width="100%" gap="4" direction="column" >
                                        <Flex display="flex" justify="start">
                                            <PersonIcon className="flex mt-1" />
                                            <Heading align="center" ml="2" size="5">Listar Gerentes</Heading>
                                        </Flex>
                                        <Flex justify="center">
                                            <Badge color="blue">Filtrar por email</Badge>
                                            {/* <Badge color="orange">Eliminar Gerentes</Badge> */}

                                        </Flex>
                                        <Flex justify="center">
                                            <Text size="1" align="center">
                                                Selecciona aquí para ver.
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Card>
                            </Button>
                        </Link>

                        <Link>
                            <Button asChild size="4" onClick={handleFormBranch}>
                                <Card style={{ height: 125, width: 350 }}>

                                    <Flex width="100%" gap="4" direction="column">
                                        <Flex display="flex" justify="center">
                                            <HomeIcon className="flex mt-1" />
                                            <Heading align="center" ml="2" size="5">Registrar Sucursal</Heading>
                                        </Flex>
                                        <Flex justify="center">
                                            <Text size="1" align="center">
                                                Selecciona aquí para registrar la información.
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Card>
                            </Button>
                        </Link>

                        <Link>
                            <Button asChild size="4" color="cyan" onClick={handleFormManager}>
                                <Card style={{ height: 125, width: 350 }}>

                                    <Flex width="100%" gap="4" direction="column">
                                        <Flex display="flex" justify="center">
                                            <PersonIcon className="flex mt-1" />
                                            <Heading align="center" ml="2" size="5">Registrar Gerente</Heading>
                                        </Flex>
                                        <Flex justify="center">
                                            <Text size="1" align="center">
                                                Selecciona aquí para registrar la información.
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Card>
                            </Button>
                        </Link><Link>
                            <Button asChild size="4" color="cyan" onClick={handleFormManager}>
                                <Card style={{ height: 125, width: 350 }}>

                                    <Flex width="100%" gap="4" direction="column">
                                        <Flex display="flex" justify="center">
                                            <PersonIcon className="flex mt-1" />
                                            <Heading align="center" ml="2" size="5">Registrar Gerente</Heading>
                                        </Flex>
                                        <Flex justify="center">
                                            <Text size="1" align="center">
                                                Selecciona aquí para registrar la información.
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Card>
                            </Button>
                        </Link>
                        <Link>
                            <Button asChild size="4" color="cyan" onClick={handleFormManager}>
                                <Card style={{ height: 125, width: 350 }}>

                                    <Flex width="100%" gap="4" direction="column">
                                        <Flex display="flex" justify="center">
                                            <PersonIcon className="flex mt-1" />
                                            <Heading align="center" ml="2" size="5">Registrar Gerente</Heading>
                                        </Flex>
                                        <Flex justify="center">
                                            <Text size="1" align="center">
                                                Selecciona aquí para registrar la información.
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Card>
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </ScrollArea>




        </main>
    )
}

