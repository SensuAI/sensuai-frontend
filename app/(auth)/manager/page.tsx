'use client';
import * as React from 'react';
import { Button, Card, Link, Flex, Text, Heading, Strong } from '@radix-ui/themes';
import BackgroundSVG from '@/components/backgroundsvg';
import { useToast } from "@/components/ui/use-toast"
import Image from 'next/image';
import { useUserContext } from '@/app/Context/userContext';
import { useEffect } from 'react';
import manager from "@/app/assets/manager1.png"

// Página principal del gerente
function Manager() {
  const { toast } = useToast();
  const { userId, setUserId, data, setData, redirectToHomePage } = useUserContext();
  const [first_name, setFirstName] = React.useState("Admin");

  // Comprobar que el usuario esté loggeado
  useEffect(() => {
    const userString: any = localStorage.getItem("user");
    const id = localStorage.getItem("id");
    const user = JSON.parse(userString);

    if (!userString) {
      redirectToHomePage();
      return;
    }
    if (user.role !== "MANAGER") {
      redirectToHomePage();
      setFirstName(user.first_name);
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
      <Heading align="center" size="7" mb="2">¡Hola, <Strong color='sky'>{first_name}</Strong>!</Heading>
      <Text size="4" mb="1" align="center">Te presentamos las opciones a elegir como gerente,</Text>
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
              src={manager}
              alt="manager1" />
            <Heading size="4" align="center" >OXXO EYYE: Gerente</Heading>
            <Text as="p" align="center" trim="both" highContrast color="indigo" className="text-gray-600" mb="5">Conoce el <Strong>desempeño general</Strong> de tu sucursal y <Strong>visualiza a todos los clientes </Strong>que has atendido. Registra a tus nuevos usuarios o <Strong>recompensa la lealtad con promociones</Strong> a su medida.</Text>
          </Flex>
        </Card>



      </Flex>

      <Flex gap="4" direction="row">
        <Flex gap="4" align="center" justify="center" ml="4" direction="column">
          <div>
            <Link href={"/branch-stats"}>
              <Button size="4" variant='solid'>
                Estadísticas Globales
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/listing-m"}>
              <Button size="4" variant='solid'>
                Clientes Identificados
              </Button>
            </Link>
          </div>
        </Flex>

        <Flex gap="4" align="center" justify="center" direction="column">
          <div>
            <Link href={"/manager/register-user"}>
              <Button size="4" variant='solid'>
                Registrar Nuevo Cliente
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/manager/password"}>
              <Button size="4" variant='solid'>
                Cambiar la Contraseña
              </Button>
            </Link>
          </div>
        </Flex>
      </Flex>

    </div>

  )
}
export default Manager;
