'use client';
import * as React from 'react';
import { Button, Card } from '@radix-ui/themes';
import { CardContent } from '@/components/ui/card';
import BackgroundSVG from '@/components/backgroundsvg';
import Image from 'next/image';


function Admin() {
    return(
    <div className="min-h-screen flex flex-col items-center justify-center">
    <BackgroundSVG/>
      <h1 className="text-4xl font-bold mb-8">Bienvenido</h1>
      <Image src="/logogas.png" alt="ImagenPrincipal" className="w-24 h-24 mx-auto" />
      <div className="p-4">
      <Card className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <CardContent className="p-4">
          <p className="text-xl text-gray-800 font-semibold">Administración</p>
          <p className="text-gray-600">Aquí podrás revisar estadísticas relevantes acerca de las diferentes sucursales así como dar de alta o de baja a empleados y sucursales.</p>
        </CardContent>
      </Card>
    </div>
    <div className="space-x-4">
        <Button variant="classic" className="w-72 h-72 text-3xl bg-blue-500 text-white rounded-lg hover:bg-red-700">
          Ver Estadísticas Globales
        </Button>
        <Button variant="classic" className="w-72 h-72 text-3xl bg-blue-500 text-white rounded-lg hover:bg-red-700">
          Administrar Personal y Sucursales
        </Button>
      </div>
    </div>
    )
}
export default Admin;