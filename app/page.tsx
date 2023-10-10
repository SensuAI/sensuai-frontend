'use client';
import Image from 'next/image'
import { Container, Flex, Heading, Text, Card, Badge, Box, TextFieldRoot, TextFieldInput, Link, Button } from '@radix-ui/themes'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import * as Form from '@radix-ui/react-form';
import oxxosl from ".//assets/oxxosl.jpg";
import oxxocomb from ".//assets/oxxocomb.jpg";

import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import HeadInfo from '@/components/elements/head-info';
import ImgSection from '@/components/elements/img-section';
import BackgroundSVG from '@/components/backgroundsvg';

export default function Home() {
  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <BackgroundSVG />

      <Image
        src="/logogas.png"
        alt="Logo oxxo"
        width={100}
        height={100}
      />

      <HeadInfo
        title="Bienvenido a tu plataforma"
        text="Aquí podrás encontrar más información acerca de los clientes que visitan tus sucursales así como diferentes sugerencias de promociones que puedes ofrecer"
        image={oxxosl}
      />

      <ImgSection
        title="¿Cómo funciona?"
        text="Con ayuda de las cámaras ubicadas en cada una de las sucursales se puede identificar a los clientes que visitan las tiendas, así como su frecuencia de visita y el tiempo que permanecen en estas, basado en estos datos el modelo genera sugerencias de promociones que pueden ser ofrecidas a los clientes"
        image={oxxocomb}
      />

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


