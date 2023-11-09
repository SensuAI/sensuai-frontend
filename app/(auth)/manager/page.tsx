'use client';
import * as React from 'react';
import { Button, Card, Link, Flex, Text, Heading } from '@radix-ui/themes';
import BackgroundSVG from '@/components/backgroundsvg';
import { useToast } from "@/components/ui/use-toast"
import Image from 'next/image';
import { useUserContext } from '@/app/Context/userContext';
import { useEffect } from 'react';

function Manager() {
  const { toast } = useToast();
  const { userId, setUserId, data, setData } = useUserContext();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const id = localStorage.getItem("id");
    toast({
      description: "Bienvenido de vuelta " + user + "!",
      duration: 6000,
    });
  }, []);
  
  return (

    <div className="w-full flex flex-col items-center p-10">

      <BackgroundSVG />
      <h1 className="text-4xl font-bold mb-8">Bienvenido</h1>
      <Image width={100}
        height={100} src="/logogas.png" alt="ImagenPrincipal" className="w-24 h-24 mx-auto mb-2" />
      <div className="p-2">
        <Card mb="6" className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <Flex direction="column" gap="4">
            <Heading size="5" align="center" >Gerente</Heading>
            <Text highContrast color="indigo" align="center" className="text-gray-600" mb="5">Aquí podrás revisar estadísticas relevantes acerca de las diferentes sucursales así como dar de alta o de baja a empleados y sucursales.</Text>
          </Flex>
        </Card>
      </div>
      <Flex gap="4" direction="column">
        <Flex className="space-x-4">
          <div>
            <Link href={"/branch-stats"}>
              <Button size="4" variant='solid' className="w-full">
                Estadísticas globales
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/listing-m"}>
              <Button size="4" variant='solid' className="w-full">
                Datos capturados
              </Button>
            </Link>
          </div>
        </Flex>

        <Flex className="space-x-4" justify="center">
            <Link
              href={"/manager/register-user"}
            >{<Button size="4" variant='solid'>
              Registrar un usuario
            </Button>}
            </Link>

            <Link
              href={"/manager/password"}
            >{<Button size="4" variant='solid' className='w-full'>
              Cambiar contraseña
            </Button>}
            </Link>
        </Flex>
      </Flex>
    </div>

  )
}
export default Manager;