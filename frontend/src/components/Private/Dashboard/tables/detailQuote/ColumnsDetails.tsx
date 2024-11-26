import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Disponibilidad = {
  hour: string;
  user: string | null;
  totalPrice: string;
  pricePaid: string;
  typeService: string;
  state: string;
};

export const columnsdetails: ColumnDef<Disponibilidad>[] = [
  {
    accessorKey: "hour",
    header: "Ora",
    cell: ({ getValue }) => getValue() || "No seleccionado", 
  },
  {
    accessorKey: "user",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Utente
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => getValue() || "No seleccionado",
  },
  {
    accessorKey: "totalPrice",
    header: "Prezzo Totale",
    cell: ({ getValue }) => getValue() || "No seleccionado",
  },
  {
    accessorKey: "pricePaid",
    header: "Prezzo Pagato",
    cell: ({ getValue }) => getValue() || "No seleccionado",
  },
  {
    accessorKey: "typeService",
    header: "Tipo di Servizio",
    cell: ({ getValue }) => getValue() || "No seleccionado",
  },
  {
    accessorKey: "state",
    header: "Stato",
    cell: ({ getValue }) => getValue() || "No seleccionado",
  },
];
