'use client';

import React from "react";
import Image from "next/image";
import { Text, Heading, Flex, Strong } from '@radix-ui/themes'

const HeadInfo = (props: any) => {
  return (
    <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10">
      <Flex className="flex mr-8 ml-12" justify="center">
        {/* Mitad Izquierda*/}
        <div className=" p-6 w-1/2 rounded-lg">
          <Heading highContrast color="sky" size="8" className="font-bold text-center pb-6">{props.title}</Heading>
          <Flex justify="center" width="100%">
            <Text highContrast color="sky" size="5" align="center" mt="4">Aquí podrás encontrar más información acerca de los <Strong>clientes</Strong> que visitan tus sucursales así como diferentes sugerencias de <Strong>promociones que puedes ofrecer.</Strong></Text>
          </Flex>
        </div>
        {/* Mitad Derecha*/}
        <div className="w-1/3 flex justify-center items-center mr-10">
          <Image

            style={{
              borderRadius: '8px',
              border: '1px solid crimson'
            }}

            src={props.image}
            alt="House Example" />
        </div>
      </Flex>
    </section>
  )
}

export default HeadInfo;