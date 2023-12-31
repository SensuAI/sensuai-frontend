// columns.tsx
import { ColumnDef } from "@tanstack/react-table"
import {  Button } from '@radix-ui/themes'
import { ArrowUpDown, Trash2 } from "lucide-react"
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

// Definir el tipo de dato que se va a utilizar
export type Branch = {
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string

  name: string; //
  state: string;
  city: string;
  street: string; //
  postal_code: string; 
  phone: string;
  id_manager: string; //
}

// Definir las columnas de la tabla
export const columns: ColumnDef<Branch>[] = [
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
      accessorKey: "name",
      header: "Nombre",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
        accessorKey: "state",
        header: "Estado",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("state")}</div>
        ),
      },
    {
      accessorKey: "street",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Calle
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="capitalize">{row.getValue("street")}</div>,
    },
    {
      accessorKey: "id_manager",
      header: () => <div className="text-right">Gerente</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("id_manager"))
  
        return <div className="text-right font-medium">{row.getValue("id_manager")}</div>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const branch = row.original
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <Trash2 className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(branch.id_manager)}
              >
                Copiar id de Gerente
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Eliminar Sucursal</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]