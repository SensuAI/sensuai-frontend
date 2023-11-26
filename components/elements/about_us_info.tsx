'use client';

import React from "react";
import Image from "next/image";
import { Text, Heading, Flex, Strong, Grid, Link, Button } from '@radix-ui/themes'
import { EyeOpenIcon } from '@radix-ui/react-icons/'


const AboutInfo = (props: any) => {
    return (
        <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10">
            <Flex className="flex mr-8 ml-8" justify="center">
                {/* Mitad Izquierda*/}
                <Flex className="w-2/5 flex items-center mr-10">

                    <Image

                        style={{
                            borderRadius: '8px',
                            //border: '1px solid crimson',
                            marginLeft: '8'
                        }}

                        src={props.image}
                        alt="Eyye logo" />

                </Flex>
                <Grid ml="6" justify="center" className=" grid content-start p-6 w-1/2">

                    <Heading highContrast color="sky" size="6" align="center" mt="4" className="font-bold pb-6">Mejorando la comunidad</Heading>
                    <Flex align="center" justify="center" width="100%">

                        <Text highContrast color="sky" size="5" >En SensuAI buscamos ayudar a OXXO GAS a transformar de forma positiva las comunidades en donde operan, es por eso que con OXXO EYYE buscamos ayudar a la comunidad, mejorar la calidad de vida de nuestra gente y contribuir de forma positiva al medio ambiente.</Text>
                    </Flex>

                    <Heading highContrast color="sky" size="6" align="center" mt="4" className="font-bold pb-6">Superando desafíos</Heading>
                    <Flex align="center" justify="center" width="100%">

                        <Text highContrast color="sky" size="5" >Fundada en 2023, SensuAI ha recorrido un camino inspirador de crecimiento y aprendizaje. buscando superar desafíos y celebrar logros que nos ayudan a forjar nuestra identidad. </Text>
                    </Flex>

                    <Heading highContrast color="sky" size="6" align="center" mt="4" className="font-bold pb-6">Calidad y Satisfacción</Heading>
                    <Flex align="center" justify="center" width="100%">

                        <Text highContrast color="sky" size="5" >En SensuAI, la excelencia no es solo un estándar, es una filosofía. Nos esforzamos por alcanzar la más alta calidad en todo lo que hacemos, desde la conceptualización de productos hasta la atención al cliente</Text>
                    </Flex>

                </Grid>

            </Flex>
        </section>
    )
}

export default AboutInfo;