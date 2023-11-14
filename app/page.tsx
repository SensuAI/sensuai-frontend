'use client';
import Image from 'next/image'
import { Card, Flex, Heading, Text, Strong } from '@radix-ui/themes'
import { ScrollArea } from "@/components/ui/scroll-area"

import oxxosl from ".//assets/oxxosl.jpg";
import oxxocomb from ".//assets/oxxocomb.jpg";
import cover from ".//assets/cover.jpg"

import HeadInfo from '@/components/elements/head-info';
import BackgroundSVG from '@/components/backgroundsvg';

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

        <Flex justify="center" mt="4">
          <Card variant='classic' style={{ height: 500, width: 1050 }}>
            <Flex justify="center" mt="4">
              <Heading highContrast color="sky" size="8">¿Cómo funciona?</Heading>
            </Flex>
            <Flex gap="4" justify="center" mt="5" px="9" width="auto" mr="9" ml="9" direction="column">
              <Text highContrast color="sky" align="center" size="4">Con ayuda de las cámaras ubicadas en cada una de las sucursales <Strong>se puede identificar a los clientes que visitan las tiendas</Strong>, así como su frecuencia de visita y el tiempo que permanecen en estas. Basado en estos datos, <Strong>el modelo genera sugerencias de promociones</Strong> ser ofrecidas a los clientes.</Text>
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

      
    </main>
  )
}


