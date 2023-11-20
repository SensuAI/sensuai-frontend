'use client';
import * as React from 'react';
import { Button, Card, Link, Flex, Heading, Text, Strong } from '@radix-ui/themes';
import { CardContent } from '@/components/ui/card';
import BackgroundSVG from '@/components/backgroundsvg';
import { useToast } from "@/components/ui/use-toast"
import Image from 'next/image';
import { useUserContext } from '@/app/Context/userContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster } from "@/components/ui/toaster";
import admin from "@/app/assets/admin1.png"


function Admin() {
  const { toast } = useToast();
  const { userId, setUserId, data, setData, redirectToHomePage } = useUserContext();
  const userString: any = localStorage.getItem("user");
  const id: any = localStorage.getItem("id");
  const user = JSON.parse(userString);

  useEffect(() => {
    if (!userString) {
      redirectToHomePage();
      return;
    }
    if (user.role !== "ADMIN") {
      redirectToHomePage();
    } else {
      toast({
        description: "Bienvenido de vuelta!",
        duration: 6000,
      });
    }
  }, [userId, toast]);

  return (
    <div className="w-full flex flex-col items-center p-6">

      <BackgroundSVG />
      <Heading align="center" size="7" mb="2">¡Hola, <Strong color='sky'>{user.first_name}</Strong>!</Heading>
      <Text align="center" size="4" mb="1">Te presentamos las opciones a elegir como administrador,</Text>
      <Text size="4" mb="4"> ¡Dinos cómo podemos ayudarte!</Text>
      {/* <Image width={100}
        height={100} src="/logogas.png" alt="ImagenPrincipal" className="w-24 h-24 mx-auto mb-2" /> */}
      <Flex direction="column" p="2">
        <Card mb="6" size="1" className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8" >
          <Flex direction="column" gap="4" align="center">
            <Image
              height={150}
              width={150}
              style={{
                borderRadius: '8px',
                marginLeft: '8',
              }}
              src={admin}
              alt="manager1" />
            <Heading size="4" align="center" >OXXO EYYE: Administrador</Heading>
            <Text as="p" align="center" trim="both" highContrast color="indigo" className="text-gray-600">Accede a gráficos que te indican <Strong>estadísticas relevantes</Strong> acerca de <Strong>todas tus sedes</Strong>.</Text>
            <Text as="p" align="center" trim="both" highContrast color="indigo" className="text-gray-600" mb="5"><Strong>Registra o elimina empleados y sucursales.</Strong></Text>
          </Flex>
        </Card>



      </Flex>

      <Flex gap="4" direction="row">
        <Flex gap="4" align="center" justify="center" ml="4" direction="column">
          <div>
            <Link href={"/global-stats"}>
              <Button size="4" variant='solid'>
                Estadísticas Globales
              </Button>
            </Link>
          </div>
         
        </Flex>

        <Flex gap="4" align="center" justify="center" direction="column">
          <div>
            <Link href={"/listing"}>
              <Button size="4" variant='solid'>
                Personal y Sucursales
              </Button>
            </Link>
          </div>
        </Flex>
      </Flex>
      <Toaster />
    </div>
  )
}
export default Admin;
