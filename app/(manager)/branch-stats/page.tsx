"use client";
import * as React from "react";
import BackgroundSVG from "@/components/backgroundsvg";

import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Card, Flex, Heading } from "@radix-ui/themes";
import FourGraphs from "@/components/page-graphs/four_graphs";
import GraphText from "@/components/page-graphs/graph_text";
import LineGasChart from "@/components/charts/line_gas";
import IncomeDayChart from "@/components/charts/income_hour";
import AttendanceBarChart from "@/components/charts/attendance_time";

import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { useUserContext } from '@/app/Context/userContext';

// Services 
import { meanTransactionTimePerMonth, incomePerHour } from "@/services/stadistics-service";

// Página de estadísticas de la sucursal
const BranchStatsPage = () => {
  const { toast } = useToast();
  const [branchName, setBranchName] = useState("OXXO");
  const [meanTTPerMonth, setMeanTTPerMonth] = useState<any>([]);
  const [income, setIncome] = useState<any>([]);
  const { userId, setUserId, data, setData, redirectToHomePage } = useUserContext();

  async function fetchData() {
    try {
      const responseTransaction: any = await meanTransactionTimePerMonth();
      const responseIncome: any = await incomePerHour();
      toast({
        description: "Data fetched",
      });
      setMeanTTPerMonth(responseTransaction);
      setIncome(responseIncome);
    } catch (error) {
      toast({
        description: "Error fetching" + error,
        duration: 3000,
      });
    }
  }

  useEffect(() => {
    const branch = localStorage.getItem("branch");
    if (branch) {
      setBranchName(branch);
    }
    const userString: any = localStorage.getItem("user");
    const id = localStorage.getItem("id");
    const user = JSON.parse(userString);

    if (!userString) {
      redirectToHomePage();
      return;
    }
    if (user.role !== "MANAGER") {
      redirectToHomePage();
    }
    fetchData();
  }, [userId, toast]);

  return (
    <main>
      <BackgroundSVG />
      <h1 className="text-center text-4xl text-black my-8 font-semibold">Sucursal {branchName}</h1>
      <Tabs defaultValue="monitoring" className="mx-auto max-w-screen-xl">
        <TabsList className="grid w-full grid-cols-3 gap-4">
          <TabsTrigger value="monitoring" className="bg-white border border-gray-300 rounded-full">Monitoreo flujo</TabsTrigger>
          <TabsTrigger value="profiles" className="bg-white border border-gray-300 rounded-full">Perfiles de usuario</TabsTrigger>
          <TabsTrigger value="trends" className="bg-white border border-gray-300 rounded-full">Tendencias</TabsTrigger>
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
              <FourGraphs />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profiles">
          <Card>
            <CardHeader>
              <CardTitle>Perfiles de usuario</CardTitle>
              <CardDescription>
                Partiendo de la información extraida de los usuarios, estos son los perfiles que se han encontrado y la información mas relevante de cada uno.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <GraphText data={[["Camiones y Tráilers",
                "Distinguimos que son conductores profesionales, cuyo consumo de gasolina nos indica que, la mayor parte de ellos, tienen un trabajo centrado en el transporte de mercancías a larga distancia."],
              ["Automóvil y camioneta",
                "Automóvil principalmente para uso personal y camioneta usada ocasionalmente como transporte de carga. Preferencia de gasolina premium comparada con los demas perfiles."],
              ["Moto",
                "Conductor ágil y orientado al rendimiento. Uso principalmente personal enfocado en viajes cortos y tráfico urbano. Preferencia de servicios adicionales por encima de los demas usuarios."],]} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Tendencias</CardTitle>
              <CardDescription>
                Explora las tendencias aquí.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Precio de gasolina a través de los meses</CardTitle>
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
                    <IncomeDayChart data={income} />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tiempo promedio de transacciones por mes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <AttendanceBarChart data={meanTTPerMonth} />
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
