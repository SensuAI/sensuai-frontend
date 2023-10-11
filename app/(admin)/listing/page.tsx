"use client"
import * as React from "react"


import { Container, Flex, Heading, Text, Card, Badge, Box, TextFieldRoot, TextFieldInput, Link, Button } from '@radix-ui/themes'
import { ChatBubbleIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons'
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"


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
import { ArrowUpDown, ChevronDown, MoreHorizontal, Trash2 } from "lucide-react"



import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },

  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },

  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },

]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Trash2 className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function Listing() {

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

  const [showTable, setShowTable] = React.useState(false);
  const [showHeading, setShowHeading] = React.useState(true);


  const handleListarSucursalesClick = () => {
    setShowTable(true);
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
              
              <Button asChild size="4" onClick={handleListarSucursalesClick}>
                <Card  style={{ height: 150, width:350 }}>

                  <Flex width="100%" gap="4" direction="column">
                    <Flex display="flex" >
                      <HomeIcon className="flex mt-1"/>
                      <Heading align="center" ml="3" size="5">Listar Sucursales</Heading>
                    </Flex>
                    <Flex gap="2">
                      <Badge color="blue">Nuevos Clientes</Badge>
                      <Badge color="orange">31 escaneos</Badge>
                    </Flex>
                    <Text size="1" align="center">
                      Selecciona aquí para ver.
                    </Text>
                  </Flex>
                </Card>
              </Button>
              </Link>

              <Link>

              <Button asChild size="4" color="cyan">
                <Card style={{ height: 150, width:350 }}>

                  <Flex gap="4" direction="column">
                    <Flex>
                      <PersonIcon />
                      <Heading align="center" ml="3" size="5">Listar Gerentes</Heading>
                    </Flex>
                    <Flex gap="2">
                      <Badge color="blue">Nuevos Gerentes</Badge>
                      <Badge color="orange">4 inactivos</Badge>
                    </Flex>
                    <Text size="1" align="center" mr="3">
                      Selecciona aquí para ver.
                    </Text>
                  </Flex>
                </Card>
              </Button>
              </Link>

              
              <Link
              key={1}
              href={"/sign-up"}
              className={cn(
                "flex items-center text-sm font-medium"
              )}
            >{<Button asChild size="4">
            <Card style={{ height: 125, width:350 }}>

              <Flex gap="4" direction="column">
                <Flex>
                <HomeIcon className=" mt-1 align-left"/>
                  <Heading align="center" ml="4" size="5">Registrar Sucursal</Heading>
                </Flex>
                <Text size="1" align="center" mr="4">
                  Selecciona aquí para registrar la información.
                </Text>
              </Flex>
            </Card>
          </Button>}
            </Link> 
            <Link
              key={1}
              href={"/sign-up"}
              className={cn(
                "flex items-center text-sm font-medium"
              )}
            >{<Button asChild size="4" color="cyan">
                <Card style={{ height: 125 , width:350 }}>

                  <Flex gap="4" direction="column">
                    <Flex>
                    <PersonIcon className=" mt-1 align-left"/>
                      <Heading align="center" ml="4" size="5">Registrar Gerente</Heading>
                    </Flex>
                    <Text size="1" align="center" mr="4">
                      Selecciona aquí para registrar la información.
                    </Text>
                  </Flex>
                </Card>
              </Button>}</Link>

              


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
              
              {showTable && <div className="w-full">
              <Heading align="center" mt="2" >Sucursales</Heading>
                <Flex display="flex" py="4" align="center">

                  <Input
                    placeholder="Filtrar sucursales..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                      table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                  />
                  <Flex width="100%" justify="end" px="9" mr="8">

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="al justify-end">
                        Columnas visibles <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="left" align="end">
                      {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={column.id}
                              className="capitalize"
                              checked={column.getIsVisible()}
                              onCheckedChange={(value) =>
                                column.toggleVisibility(!!value)
                              }
                            >
                              {column.id}
                            </DropdownMenuCheckboxItem>
                          )
                        })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  </Flex>
                  </Flex>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => {
                            return (
                              <TableHead key={header.id}>
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                              </TableHead>
                            )
                          })}
                        </TableRow>
                      ))}
                    </TableHeader>
                    <TableBody>
                      {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={columns.length}
                            className="h-24 text-center"
                          >
                            No results.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                  {/* <div className="flex items-center justify-end space-x-2 py-4">
                  <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                  </div>
                  <div className="space-x-2">
                    <Button
                      variant="outline"

                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"

                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                    >
                      Next
                    </Button>
                  </div>
                </div>   */}
              </div>}

              
            </Container>
          </ScrollArea>
        </Flex>

      </div>
    </main>
  )
}
