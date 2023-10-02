'use client';

import React from "react";
import Image from "next/image";

const HeadInfo = (props: any) => {
  return (
    <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10">
      <div className="flex mr-8 ml-8">
        {/* Mitad Izquierda*/}
        <div className="mr-16 p-6 w-2/3 rounded-lg">
          <h2 className="text-5xl font-bold text-center pb-6">{props.title}</h2>
          <p className="mt-4">{props.text}</p>
        </div>
        {/* Mitad Derecha*/}
        <div className="w-1/3 flex justify-center items-center">
          <Image
            src={props.image}
            alt="House Example" 
            className="rounded-lg"/>
        </div>
      </div>
    </section>
  )
}

export default HeadInfo;