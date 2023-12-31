"use client";
import * as React from "react";
import BackgroundSVG from "@/components/backgroundsvg";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, Flex, Heading } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import FourGraphsAdmin from "@/components/page-graphs/four_graphs_admin";
import GraphText from "@/components/page-graphs/graph_text";
import LineGasChart from "@/components/charts/line_gas";
import IncomeDayChart from "@/components/charts/income_hour";
import AttendanceBarChart from "@/components/charts/attendance_time";
import SimpleBarCharts from "@/components/charts/simple-bar-charts";
import CustomRectangleGraph from "@/components/charts/customized-rectangle";
import { useUserContext } from '@/app/Context/userContext';

/*
  * Página que muestra las estadísticas globales de todas las sucursales
*/

// Services
import { visitsPerMonth, meanTransactionTimePerMonth, incomePerHour } from "@/services/stadistics-service";

// Datos que se muestran en la gráfica de barras
const data = [
  { month: "Enero", visits: 5000 },
  { month: "Febrero", visits: 6200 },
  { month: "Marzo", visits: 5800 },
  { month: "Abril", visits: 7200 },
  { month: "Mayo", visits: 6500 },
  { month: "Junio", visits: 6800 },
  { month: "Julio", visits: 6200 },
  { month: "Agosto", visits: 7200 },
  { month: "Septiembre", visits: 7600 },
  { month: "Octubre", visits: 8200 },
  { month: "Noviembre", visits: 8000 },
  { month: "Diciembre", visits: 8500 },
];
const BranchStatsPage = () => {
  const { toast } = useToast();
  const [dataVisitsPerMonth, setDataVisitsPerMonth] = useState<any>([]);
  const [meanTTPerMonth, setMeanTTPerMonth] = useState<any>([]);
  const [income, setIncome] = useState<any>([]);
  const { userId, setUserId, data, setData, redirectToHomePage } = useUserContext();


  async function fetchData() {
  try {
    const responseTransaction: any = await meanTransactionTimePerMonth();
    const responseIncome: any = await incomePerHour();
    const ResponseVisitsPerMonth: any = await visitsPerMonth();
    toast({
      description: "Data fetched",
    });
    setMeanTTPerMonth(responseTransaction);
    setIncome(responseIncome);
    setDataVisitsPerMonth(ResponseVisitsPerMonth);
  } catch (error) {
    toast({
      description: "Error fetching" + error,
      duration: 3000,
    });
  }
}

  // Comprobar que el usuario sea administrador
  useEffect(() => {
    const userString: any = localStorage.getItem("user");
    const id: any = localStorage.getItem("id");
    const user = JSON.parse(userString);

    if (!userString) {
      redirectToHomePage();
      return; 
    }
    if (user.role !== "ADMIN") {
      redirectToHomePage();
    } else {
      toast({
        description: "Bienvenido de vuelta!",
        duration: 6000,
      });
    }
    fetchData();
  }, [userId, toast]);

  return (
    <main>
      <BackgroundSVG />
      <h1 className="text-center text-4xl text-black my-8 font-semibold">
        Bienvenido Administrador
      </h1>
      <Tabs defaultValue="monitoring" className="mx-auto max-w-screen-xl">
        <TabsList className="grid w-full grid-cols-3 gap-4">
          <TabsTrigger
            value="monitoring"
            className="bg-white border border-gray-300 rounded-full"
          >
            Monitoreo flujo
          </TabsTrigger>
          <TabsTrigger
            value="profiles"
            className="bg-white border border-gray-300 rounded-full"
          >
            Global Sucursales
          </TabsTrigger>
          <TabsTrigger
            value="trends"
            className="bg-white border border-gray-300 rounded-full"
          >
            Tendencias
          </TabsTrigger>
        </TabsList>
        <TabsContent value="monitoring">
          <Card>
            <CardHeader>
              <CardTitle>Monitoreo flujo</CardTitle>
              <CardDescription>
                Realiza un seguimiento del flujo aquí.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <FourGraphsAdmin />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profiles">
          <Card>
            <CardHeader>
              <CardTitle>Global Sucursales</CardTitle>
              <CardDescription>
                Partiendo de la información extraída de las sucursales, esta
                es la información más relevante en conjunto.
              </CardDescription>
            </CardHeader>
            <Flex direction="column" gap="2" p="4">
              <Card className="pt-2">
                <CardTitle className="p-4">
                  Montos mínimos y máximos de ganancia generados por mes en
                  todas las sucursales
                </CardTitle>
                <CardContent className="space-y-2">
                  <CustomRectangleGraph />
                </CardContent>
              </Card>
              <Card className="pt-2">
                <CardTitle className="p-4">Visitas de todas las sucursales por mes</CardTitle>
                <CardContent className="space-y-2">
                  <SimpleBarCharts inData={dataVisitsPerMonth} />
                </CardContent>
              </Card>
            </Flex>
          </Card>
        </TabsContent>
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Tendencias</CardTitle>
              <CardDescription>Explora las tendencias aquí.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Precio de gasolina a través de los meses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <LineGasChart />
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Ingresos por horas del día </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <IncomeDayChart data={income}/>
                  </CardContent>
                </Card>
                <Card className="space-y-2">
                  <CardHeader>
                    <CardTitle>
                      Tiempo promedio de transacciones por mes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <AttendanceBarChart data={meanTTPerMonth}/>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default BranchStatsPage;
