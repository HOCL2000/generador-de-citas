/* eslint-disable react-hooks/exhaustive-deps */
import { customAxiosAdmin } from "@/axios/axios.interceptor";
import { DataDay } from "@/types";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer, Tooltip, YAxis } from 'recharts';

interface ChartData {
  typeService: string;
  count: number;
}

const ChartTypeOfService = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const getDataDay = async () => {
    try {
      const request = await customAxiosAdmin.get("administracion/day", {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      const days: DataDay[] = request.data.days;
      const processedData = countTypeServices(days);
      setChartData(processedData);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const countTypeServices = (data: DataDay[]) => {
    const serviceCount: { [key: string]: number } = {};
    data.forEach((entry) => {
      entry.disponibilidad.forEach((slot) => {
        if (slot.typeService) {
          serviceCount[slot.typeService] = (serviceCount[slot.typeService] || 0) + 1;
        }
      });
    });

    return Object.keys(serviceCount).map((service) => ({
      typeService: service,
      count: serviceCount[service],
    }));
  };

  useEffect(() => {
    getDataDay();
  }, []);

  return (
    <div className="px-4">
      <div className="flex items-center flex-col shadow border rounded p-4" style={{ width: '100%', height: 400 }}>
        <h2 className="font-semibold leading-none tracking-tight py-2">Grafico dei servizi convenzionati</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart accessibilityLayer data={chartData}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="pink" opacity={0.8}/>
                <stop offset="95%" stopColor="#D1D0F0" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="hoverGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#DDDDDD" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#FAD4D8"  strokeDasharray="4 4" />
            <XAxis dataKey="typeService" fill="red" />
            <YAxis fill="#fff"  />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E21D48",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              itemStyle={{
                color: "#E21D48",
                fontWeight: "bold",
                fontSize: "14px",
                padding: "5px 0"
              }}
              labelStyle={{
                color: "#000",
                fontWeight: "600",
                fontSize: "15px",
                marginBottom: "8px"
              }}
              cursor={{ fill: "#EDD8DC" }} 
              separator=" : "
              formatter={(value) => {
                return Number(value) > 3 ? `🔥 ${value} (Alto)` : `${value} (Normal)`;
              }} 
              labelFormatter={(label) => `Servizio: ${label}`} 
              />
            <Bar dataKey="count" fill="url(#barGradient)" stroke="#E21D48" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
              </div>
  );
};

export default ChartTypeOfService;
