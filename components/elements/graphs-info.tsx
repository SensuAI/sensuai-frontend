'use client';

import React from "react";
import Image from "next/image";
import { Text, Heading, Flex, Strong, Grid, Link, Button } from '@radix-ui/themes'
import { EyeOpenIcon, LightningBoltIcon, TargetIcon } from '@radix-ui/react-icons/'

// Componente para mostrar la información de los gráficos

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

                        <Text highContrast color="sky" size="5" >Ponemos a tu total disposición una serie de <Strong>modelos robustos</Strong>  que se encargan de distinguir <Strong>clientes nuevos</Strong>  y <Strong>clientes recurrentes</Strong>. </Text>
                    </Flex>

                    <TargetIcon style={{
                        borderRadius: '8px',
                        marginTop:"30",
                        marginBottom:"8",
                        marginLeft: '275',
                        height: "45",
                        width: "45",
                        color: "#a92033",
                    }} />

                    <Heading highContrast color="sky" size="6" align="center" className="font-bold pb-6">Observa gráficos detallados</Heading>
                    <Flex align="center" justify="center" width="100%">

                        <Text highContrast color="sky" size="5" > Te mantenemos al tanto del <Strong>desempeño de todas tus sucursales</Strong>  mediante una variedad de <Strong>gráficos</Strong> con datos <Strong>relevantes</Strong> para ti.</Text>
                    </Flex>

                    <LightningBoltIcon style={{
                        borderRadius: '8px',
                        marginTop:"30",
                        marginBottom:"8",
                        marginLeft: '275',
                        height: "45",
                        width: "45",
                        color: "#a92033",
                    }} />

                    <Heading highContrast color="sky" size="6" align="center" className="font-bold pb-6">Genera promociones personalizadas</Heading>
                    <Flex align="center" justify="center" width="100%">

                        <Text highContrast color="sky" size="5" >Premia la <Strong>lealtad de tus clientes</Strong>  haciéndoles llegar <Strong>descuentos y promociones a su medida</Strong>  a usarse en todas las sucursales <Strong>OXXO</Strong>.</Text>
                    </Flex>

                </Grid>

            </Flex>
        </section>
    )
}

export default GraphsInfo;