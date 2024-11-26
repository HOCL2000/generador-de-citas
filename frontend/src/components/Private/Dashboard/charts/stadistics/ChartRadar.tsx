/* eslint-disable react-hooks/exhaustive-deps */
import { customAxiosAdmin } from "@/axios/axios.interceptor";
import { ChartData, DataDay } from "@/types";
import { useEffect,  useState } from "react";
import { ResponsiveContainer, PieChart, Pie,  Label } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart"

const ChartRadar = () => {
    const [chartData, setChartData] = useState<ChartData[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    
    const getDataDay = async () => {
    try {
      const request = await customAxiosAdmin.get("administracion/day", {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      const days: DataDay[] = request.data.days
      if(days){
        const processedData = countTypeServices(days);
        setChartData(processedData);
        setTotalItems(days.length)
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
    };

    const countTypeServices = (data: DataDay[]) => {
        const serviceCount: { [key: string]: number } = {};
        data.forEach((entry) => {
            if (entry.location) {
              serviceCount[entry.location] = (serviceCount[entry.location] || 0) + 1;
            }
        });

        return Object.keys(serviceCount).map((service) => ({
          name: service,
          count: serviceCount[service],
        }));
    };
    const chartConfig = {
      count: {
        label: "Count",
      },
      sambenedetto: {
        label: "Sam Benedetto",
        color: "#F17E92",
      },
      pescara: {
        label: "Pescara",
        color: "#F17E92",
      }
    } satisfies ChartConfig
    
    useEffect(() => {
        getDataDay();
    }, []);


    return (
    <div className="px-4">
    <div style={{ width: '100%', height: 400 } } className="flex items-center flex-col shadow border rounded ">
        <h2 className="font-semibold leading-none tracking-tight py-4">Giorni totali prenotati</h2>
        <ResponsiveContainer width="100%" height="100%">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="name"
              stroke="0"
            />
          </PieChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default ChartRadar