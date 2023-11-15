'use client';

import React from "react";
import Image from "next/image";
import { Text, Heading, Flex, Strong, Grid, Link, Button } from '@radix-ui/themes'
import { EyeOpenIcon } from '@radix-ui/react-icons/'


const GraphsInfo = (props: any) => {
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
                        alt="House Example" />

                </Flex>
                <Grid ml="6" justify="center" className=" grid content-start p-6 w-1/2">
                    <EyeOpenIcon style={{
                        borderRadius: '8px',
                        marginLeft: '275',
                        height: "45",
                        width: "45",
                        color: "#a92033",
                    }} />

                    <Heading highContrast color="sky" size="6" align="center" className="font-bold pb-6">Identifica a tus clientes</Heading>
                    <Flex align="center" justify="center" width="100%">

                        <Text highContrast color="sky" size="5" >Aquí podrás encontrar más información acerca de los <Strong>clientes</Strong> que visitan tus sucursales, así como algunas <Strong>promociones a ofrecer.</Strong></Text>
                    </Flex>

                    <EyeOpenIcon style={{
                        borderRadius: '8px',
                        marginTop:"30",
                        marginLeft: '275',
                        height: "45",
                        width: "45",
                        color: "#a92033",
                    }} />

                    <Heading highContrast color="sky" size="6" align="center" className="font-bold pb-6">Observa gráficos detallados</Heading>
                    <Flex align="center" justify="center" width="100%">

                        <Text highContrast color="sky" size="5" >Aquí podrás encontrar más información acerca de los <Strong>clientes</Strong> que visitan tus sucursales, así como algunas <Strong>promociones a ofrecer.</Strong></Text>
                    </Flex>

                    <EyeOpenIcon style={{
                        borderRadius: '8px',
                        marginTop:"30",
                        marginLeft: '275',
                        height: "45",
                        width: "45",
                        color: "#a92033",
                    }} />

                    <Heading highContrast color="sky" size="6" align="center" className="font-bold pb-6">Genera promociones personalizadas</Heading>
                    <Flex align="center" justify="center" width="100%">

                        <Text highContrast color="sky" size="5" >Aquí podrás encontrar más información acerca de los <Strong>clientes</Strong> que visitan tus sucursales, así como algunas <Strong>promociones a ofrecer.</Strong></Text>
                    </Flex>

                </Grid>

            </Flex>
        </section>
    )
}

export default GraphsInfo;