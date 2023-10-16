'use client';
import Image from 'next/image'
import { Card, Flex, Heading, Text, Strong } from '@radix-ui/themes'
import { ScrollArea } from "@/components/ui/scroll-area"

import oxxosl from ".//assets/oxxosl.jpg";
import oxxocomb from ".//assets/oxxocomb.jpg";

import React, { Fragment, useEffect, useState } from 'react';
import HeadInfo from '@/components/elements/head-info';
import ImgSection from '@/components/elements/img-section';
import BackgroundSVG from '@/components/backgroundsvg';

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <BackgroundSVG />
      <ScrollArea className="h-[710px] w-[1422px] rounded-md ">
        <Flex justify="center" mt="6" direction="row">

          <Image
            src="/logogas.png"
            alt="Logo oxxo"
            width={100}
            height={100}
          />
        </Flex>

        <Flex>
          <HeadInfo
            title="Bienvenido a tu plataforma"
            image={oxxosl}
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

      {/* 
      <Container size="1">
        <Flex direction="column" pb="4">
          <Heading align="center" mb="4">OXXO GAS Tultitlán</Heading>
          <Text align="center"> Aquí puedes ver la información registrada por las cámaras</Text>
        </Flex>

        <Flex gap="4" direction="column">

          <Card>
            <Flex gap="4" direction="column">
              <Text>PAY-344 - Jorge Isidro Negrete Martínez</Text>
              <Flex gap="2">
                <Badge color="blue">Cliente registrado</Badge>
                <Badge color="blue">SPIN CARD</Badge>
              </Flex>
              <Text>
                Promociones disponibles.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>


            <Flex gap="4" direction="column">
              <Text>NTZ-345</Text>
              <Flex gap="2">
                <Badge color="orange">Cliente no registrado</Badge>
                <Badge color="orange">Sin SPIN CARD.</Badge>
              </Flex>
              <Text>
                Ofrecer unirse a SPIN CARD.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>
            <Flex gap="4" direction="column">
              <Text>MTA-435</Text>
              <Flex gap="2">
                <Badge color="orange">Cliente no registrado</Badge>
                <Badge color="orange">Sin SPIN CARD</Badge>
              </Flex>
              <Text>
                No ofrecer unirse a SPIN CARD.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Container>
      */}
    </main>
  )
}


