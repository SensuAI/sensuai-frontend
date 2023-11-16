'use client';
import Image from 'next/image'
import { Card, Flex, Heading, Text, Strong } from '@radix-ui/themes'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Toaster } from "@/components/ui/toaster";



import oxxosl from ".//assets/oxxosl.jpg";
import oxxocomb from ".//assets/oxxocomb.jpg";
import cover from ".//assets/cover.jpg"
import graphs from ".//assets/graphsalt.png"

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

import { DesktopIcon } from '@radix-ui/react-icons/'


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
            image={cover}
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
          <Card variant='classic' style={{ height: 500, width: 1200 }}>
            <Flex justify="center" mt="4" mb="6">
              <Heading highContrast color="sky" size="8">Facilitando la obtención de KPIs para nuestros usuarios</Heading>
            </Flex>

            <Tabs defaultValue="monitoring" >
              <Flex justify="center">
              <TabsList className="grid w-1/2 grid-cols-2 gap-4 justify-center">
                <TabsTrigger value="admins" className="bg-white border border-gray-300 rounded-full">Administradores</TabsTrigger>
                <TabsTrigger value="managers" className="bg-white border border-gray-300 rounded-full">Gerentes</TabsTrigger>

              </TabsList>
              </Flex>
              <TabsContent value="admins">
                <Flex direction="column">
                <Card mt="4">
                  <CardHeader>
                    <CardTitle> - Infórmate constantemente sobre el rendimiento global de tus sucursales </CardTitle>
                  </CardHeader>
                  
                </Card>
                </Flex>
              </TabsContent>
              <TabsContent value="managers">
                <Card>
                  <CardHeader>
                    <CardTitle>Perfiles de usuario</CardTitle>
                    <CardDescription>
                      Partiendo de la información extraida de los usuarios, estos son los perfiles que se han encontrado y la información mas relevante de cada uno.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                   
                  </CardContent>
                </Card>
              </TabsContent>

            </Tabs>

          </Card>
        </Flex>

        <Flex justify="center" mt="4">
          <Card variant='classic' style={{ height: 500, width: 1200 }}>
            <Flex justify="center" mt="4">
              <Heading highContrast color="sky" size="8">¿Cómo funciona?</Heading>
            </Flex>
            <Flex gap="4" justify="center" mt="5" px="9" width="auto" mr="9" ml="9" direction="column">
              <Text highContrast color="sky" align="center" size="5">Con ayuda de las cámaras ubicadas en cada una de las sucursales <Strong>se puede identificar a los clientes que visitan las tiendas</Strong>, así como su frecuencia de visita y el tiempo que permanecen en estas. Basado en estos datos, <Strong>el modelo genera sugerencias de promociones</Strong> ser ofrecidas a los clientes.</Text>
            </Flex>
            <Flex justify="center" mt="6">
              <Image
                style={{
                  borderRadius: '8px',
                  border: '1px solid crimson'
                }}
                src={oxxocomb}
                width={600}
                height={600}
                alt="House Example"
                className="rounded-lg" />
            </Flex>

          </Card>
        </Flex>

      </ScrollArea>
      <Toaster />
    </main>
  )
}


