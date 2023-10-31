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

import { Card, Heading } from "@radix-ui/themes";
import FourGraphs from "@/components/page-graphs/four_graphs";

const BranchStatsPage = () => {
  const [branchName, setBranchName] = React.useState("OXXO");
  return (
    <main>
      <BackgroundSVG />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <div>
          <Card className="p-4">
            <Heading>Visitas Históricas</Heading>
            <SimpleBarCharts />
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Tipo de pago</Heading>
            <PaymentPieChart data01={data01} />
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Tiempo de transacciones</Heading>
            <HistogramBarChart data={data} />
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Ganancias por semana</Heading>
            <BranchIncomeBarChart data={data} />
          </Card>
        </div>
      </div> */}
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
                Realiza cambios en los perfiles de usuario aquí.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Contenido para Perfiles de usuario */}
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
              {/* Contenido para Tendencias */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

    </main>
  );
};

export default BranchStatsPage;
