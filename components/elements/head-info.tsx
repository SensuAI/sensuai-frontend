'use client';

import React from "react";
import Image from "next/image";
import { Text, Heading, Flex, Strong, Grid, Link, Button } from '@radix-ui/themes'
import { ArrowRightIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'



const HeadInfo = (props: any) => {
  return (
    <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10">
      <Flex className="flex mr-8 ml-8" justify="center">
        {/* Mitad Izquierda*/}
        <Grid   className=" grid content-start p-6 w-1/2 mt-14">
          <Heading highContrast color="sky" size="9"  align="center" className="font-bold pb-6">{props.title}</Heading>
          <Flex justify="center" width="100%">
            <Text highContrast color="sky" size="5" mt="4">Aquí podrás encontrar más información acerca de los <Strong>clientes</Strong> que visitan tus sucursales, así como algunas <Strong>promociones a ofrecer.</Strong></Text>
          </Flex>
          <Flex mt="6" justify="center">
          <Link href={"/sign-in"}>
              <Button size="4" variant='solid' className="w-full">
                Acceder a estadísticas
                <DoubleArrowRightIcon/>
              </Button>
            </Link>
            </Flex>
        </Grid>
        {/* Mitad Derecha*/}
        <div className="w-1/3 flex items-center ml-16">
          
          <Image
          

            style={{
              borderRadius: '8px',
              border: '1px solid crimson',
              marginLeft:'8'
            }}

            src={props.image}
            alt="House Example" />
        </div>
      </Flex>
    </section>
  )
}

export default HeadInfo;