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
import FourGraphs from "@/components/page-graphs/four_graphs";
import GraphText from "@/components/page-graphs/graph_text";
import LineGasChart from "@/components/charts/line_gas";
import IncomeDayChart from "@/components/charts/income_hour";
import AttendanceBarChart from "@/components/charts/attendance_time";
import SimpleBarCharts from "@/components/charts/simple-bar-charts";
import CustomRectangleGraph from "@/components/charts/customized-rectangle";

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
            Perfiles de usuario
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
              <FourGraphs />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profiles">
          <Card>
            <CardHeader>
              <CardTitle>Perfiles de usuario</CardTitle>
              <CardDescription>
                Partiendo de la información extraída de los usuarios, estos son
                los perfiles que se han encontrado y la información más
                relevante de cada uno.
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
                  <SimpleBarCharts inData={data} />
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
                    <CardTitle>Ingresos por horas del dia </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <IncomeDayChart />
                  </CardContent>
                </Card>
                <Card className="space-y-2">
                  <CardHeader>
                    <CardTitle>
                      Tiempo promedio de transacciones por mes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <AttendanceBarChart />
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
