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
import { assignUser } from "@/services/plate-service";

// Página para registrar un nuevo usuario
export default function Upload() {
  const router = useRouter();
  const { toast } = useToast();
  const [emailContext, setEmailContext] = React.useState("");
  const { userId, setUserId, data, setData, redirectToHomePage } = useUserContext();

  // Comprobar que el usuario esté loggeado como manager
  useEffect(() => {
    const userString: any = localStorage.getItem("user");
    const id = localStorage.getItem("id");
    const user = JSON.parse(userString);
    const emailContext = userString ? JSON.parse(userString).email : '';


    if (!userString) {
      redirectToHomePage();
      return;
    }
    if (user.role !== "MANAGER") {
      redirectToHomePage();
    } 
    setEmailContext(emailContext);
  }, [userId, toast]);

  async function registerUser(plate: string, username: string) {
    try {
      const response: any = await assignUser(plate, username);
      toast({
        description: JSON.stringify(response, null, 2),
        duration: 3000
      })
      if (response.status == "Success") {
        toast({
          description: "User assigned successfully",
          duration: 1000
        })
        setTimeout(() => {
          router.push("/manager");
        }, 1000);
      }
    } catch (error) {
      toast({
        description: "Error assigning user: " + error,
        duration: 3000
      })
    }
  }

  function submitForm(data: any) {
    registerUser(data.plate, data.username);
  }

  const [serverErrors, setServerErrors] = React.useState({
    plate: false,
    username: false,
  });

  return (
    <main className="flex flex-col items-center justify-center pt-8 mt-8">
      <BackgroundSVG />
      <Flex gap="4" direction="column">
        <Card size="4" variant='surface' style={{ width: '400px' }}>
          <Box mb="4" height="7">
            <Heading size="6">Registra un nuevo usuario</Heading>
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
                setServerErrors({ plate: false, username: false })
              }>
              <Form.Field name="plate">
                <Text mb="9" size="2" weight="medium">Placa</Text>
                <Form.Control asChild required>
                  <TextFieldInput mt="2" mb="4" type="text" id="plate" />
                </Form.Control>
              </Form.Field>
              <Form.Field name="username">
                <Text mb="9" size="2" weight="medium">Nombre de usuario</Text>
                <Form.Control asChild required>
                  <TextFieldInput mt="2" mb="4" type="text" id="username" />
                </Form.Control>
              </Form.Field>
              <Flex display="flex" justify="center" gap="3" mt="6">
                <Form.Submit asChild>
                  <Button size="2" variant='solid' >Registrar nuevo usuario</Button>
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