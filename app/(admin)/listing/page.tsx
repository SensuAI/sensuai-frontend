"use client"
import * as React from "react"
import { Container, Flex, Heading, Text, Card, Badge, Link, Button } from '@radix-ui/themes'
import { ChatBubbleIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons'
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

import { getAllManagers } from '@/services/user-service';
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"

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

export default function Listing() {

  const { toast } = useToast();

  const [dataManagers, setDataManagers] = React.useState([]);

  async function fetchManagers() {
    console.log("Fetching managers");
    try {
      const Response: any = await getAllManagers();
      setDataManagers(Response);
      toast({
        description: JSON.stringify(Response, null, 2),
      });
    } catch (error) {
      toast({
        description: "Error getting managers" + error,
        duration: 3000,
      });
    }
  }
  useEffect(() => {
    fetchManagers();
  }, []);


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
    <main className="flex p-4">
      <BackgroundSVG />

      <div>

        <ScrollArea className="h-[680px] w-[350px] ">

          <Container size="1">


            <Flex gap="4" direction="column">
              <Link asChild>

                <Button asChild size="4" onClick={handleListBranches}>
                  <Card style={{ height: 150, width: 350 }}>

                    <Flex width="100%" gap="4" direction="column">
                      <Flex display="flex" justify="center" >
                        <HomeIcon className="flex mt-1" />
                        <Heading align="center" ml="3" size="5">Listar Sucursales</Heading>
                      </Flex>
                      <Flex gap="2">
                        <Badge color="blue">Filtrar por calle</Badge>
                        <Badge color="orange">Eliminar Sucursales</Badge>
                      </Flex>
                      <Text size="1" align="center">
                        Selecciona aquí para ver.
                      </Text>
                    </Flex>
                  </Card>
                </Button>
              </Link>

              <Link>

                <Button asChild size="4" color="cyan" onClick={handleListManagers}>
                  <Card style={{ height: 150, width: 350 }}>

                    <Flex width="100%" gap="4" direction="column" >
                      <Flex display="flex" justify="start">
                        <PersonIcon className="flex mt-1"/>
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
                        <HomeIcon className="flex mt-1"/>
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
                        <PersonIcon className="flex mt-1"/>
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
          </Container>
        </ScrollArea>
      </div>

      <div>
        <Flex gap="4" ml="2">
          <ScrollArea className="h-[680px] w-[1060px] rounded-md px-4">
            <Container>
              {showHeading && (
                <Heading align="center" mt="9" >¡Bienvenido! Selecciona una opción para continuar.</Heading>
              )}

              {showFormBranch && (<BranchForm managers={dataManagers}/>)}
              {showFormManager && (<ManagerForm />)}
              {showTableBranches && <DataTableB columns={columns} data={data} />}
              {showTableManagers && <DataTableM columns={columnsM} data={dataManagers} />}
            </Container>
          </ScrollArea>
        </Flex>

      </div>
    </main>
  )
}

