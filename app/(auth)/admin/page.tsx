'use client';
import * as React from 'react';
import { Button, Card, Link, Flex } from '@radix-ui/themes';
import { CardContent } from '@/components/ui/card';
import BackgroundSVG from '@/components/backgroundsvg';
import { useToast } from "@/components/ui/use-toast"
import Image from 'next/image';
import { useUserContext } from '@/app/Context/userContext';
import { useEffect } from 'react';

function Admin() {
  const { toast } = useToast();
  const { userId, setUserId, data, setData } = useUserContext();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const id = localStorage.getItem("id");
    toast({
      description: "Bienvenido de vuelta!",
      duration: 6000,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-12">
      <BackgroundSVG />
      <h1 className="text-4xl font-bold mb-8">Bienvenido</h1>
      <Image width={100}
        height={100} src="/logogas.png" alt="ImagenPrincipal" className="w-24 h-24 mx-auto" />
      <div className="p-4">
        <Card mb="8" className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <CardContent className="p-4">
            <p className="text-xl text-gray-800 font-semibold">Administración</p>
            <p className="text-gray-600">Aquí podrás revisar estadísticas relevantes acerca de las diferentes sucursales así como dar de alta o de baja a empleados y sucursales.</p>
          </CardContent>
        </Card>
      </div>
      <Flex className="space-x-4">
        <Link
          href={"/global-stats"}
        >{<Button size="4" variant='solid'>
          Estadísticas globales
        </Button>}
        </Link>
        <Link
          href={"/listing"}
        >{<Button size="4" variant='solid'>
          Personal y Sucursales
        </Button>}
        </Link>
      </Flex>
    </div>
  )
}
export default Admin;