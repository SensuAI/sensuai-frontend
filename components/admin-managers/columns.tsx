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

// Define the Payment type
export type Manager = {
  amount: number
  status: "pending" | "processing" | "success" | "failed"


  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
  role: "MANAGER";
}

// Define the columns
export const columnsM: ColumnDef<Manager>[] = [
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
      accessorKey: "first_name",
      header: "Nombre",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("first_name")}</div>
      ),
    },
    {
        accessorKey: "last_name",
        header: "Apellido",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("last_name")}</div>
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
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const manager = row.original
  
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
                onClick={() => navigator.clipboard.writeText(manager.email)}
              >
                Copiar email de Gerente
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Eliminar Gerente</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]