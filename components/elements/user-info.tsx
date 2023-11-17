'use client';

import React from "react";
import Image from "next/image";
import { Text, Heading, Flex, Strong, Grid, Link, Button } from '@radix-ui/themes'
import { ArrowRightIcon, DoubleArrowRightIcon, CaretRightIcon } from '@radix-ui/react-icons'



const UserInfo = (props: any) => {
    return (
        <section className="container grid items-center gap-10  md:py-10">
            <Flex className="flex mr-8 ml-8" justify="center">
                {/* Mitad Izquierda*/}
                <Grid className=" grid content-start p-4 w-1/2">
                    <Heading highContrast color="sky" size="7" align="center" className="font-bold pb-6">{props.title}</Heading>
                    <Flex direction="column" align="center" justify="center" width="100%">
                        <Flex mb="4">
                            <CaretRightIcon style={{
                                borderRadius: '8px',
                                marginTop: "3",
                                height: "22",
                                width: "22",
                                color: "#a92033",
                            }} />

                            <Text highContrast color="sky" size="5">{props.b1}</Text>
                        </Flex>

                        <Flex mb="4">
                            <CaretRightIcon style={{
                                borderRadius: '8px',
                                marginTop: "3",
                                height: "22",
                                width: "22",
                                color: "#a92033",
                            }} />

                            <Text highContrast color="sky" size="5">{props.b2}</Text>
                        </Flex>

                        <Flex>
                            <CaretRightIcon style={{
                                borderRadius: '8px',
                                marginTop: "3",
                                height: "22",
                                width: "22",
                                color: "#a92033",
                            }} />

                            <Text highContrast color="sky" size="5">{props.b3}</Text>
                        </Flex>

                    </Flex>

                </Grid>
                {/* Mitad Derecha*/}
                <div className="w-1/3 flex items-center ml-16">

                    <Image
                        style={{
                            borderRadius: '8px',
                            marginLeft: '8'
                        }}
                        src={props.image}
                        alt="House Example" />
                </div>
            </Flex>
        </section>
    )
}

export default UserInfo;