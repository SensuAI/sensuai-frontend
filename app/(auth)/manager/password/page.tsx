"use client"
import * as React from "react"

import { Container, Flex, Heading, Card, Box, Button, Text, TextFieldInput } from '@radix-ui/themes'
import BackgroundSVG from "@/components/backgroundsvg"
import * as Form from '@radix-ui/react-form';
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster";

import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useUserContext } from '@/app/Context/userContext';

// Services
import { changePassword } from "@/services/authentication-service";

// Página para cambiar la contraseña

export default function Upload() {
  const router = useRouter();
  const { toast } = useToast();
  const [emailContext, setEmailContext] = React.useState("");
  const { userId, setUserId, data, setData, redirectToHomePage } = useUserContext();

  useEffect(() => {
    const userString: any = localStorage.getItem("user");
    const emailContext = userString ? JSON.parse(userString).email : '';
    setEmailContext(emailContext);
    const id = localStorage.getItem("id");
    const user = JSON.parse(userString);

    if (!userString) {
      redirectToHomePage();
      return;
    }
    if (user.role !== "MANAGER") {
      redirectToHomePage();
    }
  }, [userId, toast]);

  // Cambiar contraseña
  async function changeOfPassword(email: string, password: string, new_password: string) {
    try {
      const response: any = await changePassword(email, password, new_password);
      toast({
        description: JSON.stringify(response, null, 2),
        duration: 3000
      })
      if (response.status == "Success") {
        toast({
          description: "Password changed successfully",
          duration: 1000
        })
        setTimeout(() => {
          router.push("/manager");
        }, 1000);
      }
    } catch (error) {
      toast({
        description: "Error changing password: " + error,
        duration: 3000
      })
    }
  }

  // Subir form y comprobar errores
  function submitForm(data: any) {
    if ((data) && (data.newPassword === data.repPassword)) {
      changeOfPassword(emailContext, data.password, data.newPassword);
    } else {
      toast({
        description: "Datos incorrectos. Revisa que tu contraseña sea correcta y que hayas repetido correctamente tu nueva contraseña",
        duration: 6000
      });
    }
  }

  const [serverErrors, setServerErrors] = React.useState({
    password: false,
    newPassword: false,
    repPassword: false
  });

  return (
    <main className="flex flex-col items-center justify-center pt-8 mt-8">
      <BackgroundSVG />
      <Flex gap="4" direction="column">
        <Card size="4" variant='surface' style={{ width: '400px' }}>
          <Box mb="4" height="7">
            <Heading size="6">Cambio de contraseña</Heading>
          </Box>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Form.Root onSubmit={(event) => {
              const data = Object.fromEntries(new FormData(event.currentTarget));
              // Submit form data and catch errors in the response
              submitForm(data)
              // prevent default form submission
              event.preventDefault();
            }}
              onClearServerErrors={() =>
                setServerErrors({ password: false, newPassword: false, repPassword: false, })
              }>
              <Form.Field name="password">
                <Text mb="9" size="2" weight="medium">Contraseña actual</Text>
                <Form.Control asChild required>
                  <TextFieldInput mt="2" mb="4" type="password" id="actualPassword" />
                </Form.Control>
              </Form.Field>
              <Form.Field name="newPassword">
                <Text mb="9" size="2" weight="medium">Nueva contraseña</Text>
                <Form.Control asChild required>
                  <TextFieldInput mt="2" mb="4" type="password" id="newPassword" />
                </Form.Control>
              </Form.Field>
              <Form.Field name="repPassword">
                <Text mb="9" size="2" weight="medium">Repite la contraseña</Text>
                <Form.Control asChild required>
                  <TextFieldInput mt="2" mb="4" type="password" id="repPassword" />
                </Form.Control>
              </Form.Field>
              <Flex display="flex" justify="center" gap="3" mt="6">
                <Form.Submit asChild>
                  <Button size="2" variant='solid' >Cambiar contraseña</Button>
                </Form.Submit>
              </Flex>
            </Form.Root>
          </div>
        </Card>
      </Flex>
      <Toaster />
    </main>
  )
}