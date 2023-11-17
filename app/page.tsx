'use client';
import Image from 'next/image'
import { Card, Flex, Heading, Text, Strong } from '@radix-ui/themes'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Toaster } from "@/components/ui/toaster";



import oxxosl from ".//assets/oxxosl.jpg";
import oxxocomb from ".//assets/oxxocomb.jpg";
import cover from ".//assets/cover.jpg"
import finalcover from ".//assets/finalcover4.png"
import graphs from ".//assets/graphsalt.png"
import lupa from ".//assets/lupa.png"
import admingraph from ".//assets/admingraph.png"

import HeadInfo from '@/components/elements/head-info';
import BackgroundSVG from '@/components/backgroundsvg';
import GraphsInfo from '@/components/elements/graphs-info';

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

import { DesktopIcon, BarChartIcon } from '@radix-ui/react-icons/'
import UserInfo from '@/components/elements/user-info';


export default function Home() {
  return (

    <main className="flex flex-col items-center justify-between">

      <BackgroundSVG />
      <ScrollArea className="h-[715px] w-[1422px] rounded-md ">
        <Flex justify="center" mt="6" direction="row">

          <Image
            src="/logoredeyyealt.png"
            alt="Logo oxxo"
            width={250}
            height={250}
          />
        </Flex>

        <Flex>
          <HeadInfo
            title="Inspira lealtad"
            image={finalcover}
          />
        </Flex>

        <Flex justify="center" mt="8">
          <Card variant='ghost' style={{ height: 75, width: 1422 }}>
            <Flex justify="center" >
              <Heading highContrast color="sky" size="8">Datos precisos fomentan buenas decisiones</Heading>
            </Flex>
          </Card>
        </Flex>

        <Flex justify="center" direction="row">
          <GraphsInfo
            title=""
            image={graphs}
          />

        </Flex>


        <Flex justify="center" mt="4">
          <Card variant='ghost' style={{ height: 500, width: 1200 }}>
            <Flex justify="center" mt="4" mb="6">
              <Heading highContrast color="sky" size="8">Facilitando la obtención de KPIs para todos nuestros usuarios</Heading>
            </Flex>

            <Tabs defaultValue="admins" >
              <Flex justify="center">
                <TabsList className="grid w-1/2 grid-cols-2 gap-4 justify-center">
                  <TabsTrigger value="admins" className="bg-white border border-gray-300 rounded-full">Administradores</TabsTrigger>
                  <TabsTrigger value="managers" className="bg-white border border-gray-300 rounded-full">Gerentes</TabsTrigger>

                </TabsList>
              </Flex>
              <TabsContent value="admins">
                <Flex>
                  <UserInfo
                    title="Toda la información en un sólo lugar"
                    image={admingraph}
                    b1="Registra, elimina y coordina a tus Gerentes."
                    b2="Optimiza la administración con enfoques avanzados."
                    b3="Nuestros modelos despliegan la información para ti."
                  />
                </Flex>
              </TabsContent>
              <TabsContent value="managers">
              <Flex>
                  <UserInfo
                    title="Optimiza y moderniza tu sucursal"
                    image={lupa}
                    b1="Genera promociones de manera automática."
                    b2="Implementa tecnologías de vanguardia."
                    b3="Mejora exponencialmente la gestión."
                  />
                </Flex>
              </TabsContent>

            </Tabs>

          </Card>
        </Flex>



      </ScrollArea>
      <Toaster />
    </main>
  )
}


