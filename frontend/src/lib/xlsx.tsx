/* eslint-disable react-refresh/only-export-components */
import { customAxiosAdmin } from "@/axios/axios.interceptor";
import { Button } from "@/components/ui/button";
import xlsx, { IContent, IJsonSheet } from "json-as-xlsx";
import { Download } from "lucide-react";

export function xls(data: IContent[]) {
  const columns: IJsonSheet[] = [
    {
      sheet: "Personas",
      columns: [
        { label: "Person id", value: "_id" },
        { label: "Name", value: "name" },
        { label: "Email", value: "email" },
        { label: "Compras", value: "compras" },
      ],
      content: data,
    },
  ];
  const settings = {
    fileName: "Reporte compras",
    extraLength: 3, // Para asegurar espacio adicional en celdas
    writeOptions: {} // Opciones adicionales de escritura si son necesarias
  };
  
  xlsx(columns, settings);
}

const DownloadExcel = () => {
  async function getDataUser() {
    try {
      const request = await customAxiosAdmin.get("administracion/users", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const users = request.data.users;

      if (users.length > 0) {
        xls(users);
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }

  return (
    <Button onClick={getDataUser} className="bg-green-500 hover:bg-green-600 text-white"  >
      <Download/> Descargar Excel
    </Button>
  );
};

export default DownloadExcel;
