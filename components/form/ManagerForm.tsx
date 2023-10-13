'use client';
import { Container, Flex, Heading, Text, Card, Box, TextFieldInput, Link, Button } from '@radix-ui/themes'
import { useToast } from "@/components/ui/use-toast"
import * as Form from '@radix-ui/react-form';
import React from 'react';

import { signup } from '@/services/authentication-service';

const ManagerForm = () => {
  const { toast } = useToast();

  async function submitForm(data: any) {
    try {
      data.role = "MANAGER";

      const Response: any = await signup(data);
      if (Response) {
        toast({
          description: "The user was created",
          duration: 3000,
        });
        
      } else {
        toast({
          description: "Incorrect parameters format. Please try again.",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Error en la respuesta: " + error
      });
    }
  }

  const [serverErrors, setServerErrors] = React.useState({
    first_name: false,
    last_name: false,
    email: false,
    password: false,
    role: false
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">

      <Container size="1">
        <Flex direction="column" pb="4">
          <Heading align="center">Da de alta un gerente</Heading>
          <Text align="center"> Por favor introduce la información. </Text>
        </Flex>

        <Flex gap="4" direction="column">
          <Card size="4" variant='surface' style={{ width: '400px' }}>
            <Box mb="4" height="7">
              <Heading size="6">Registro de gerente</Heading>
            </Box>
            <Form.Root
              // `onSubmit` only triggered if it passes client-side validation
              onSubmit={(event) => {
                const data = Object.fromEntries(new FormData(event.currentTarget));
                // Submit form data and catch errors in the response
                submitForm(data)
                // prevent default form submission
                event.preventDefault();
              }}
              onClearServerErrors={() =>
                setServerErrors({ first_name: false, last_name: false, email: false, password: false, role: false })
              }>

              <Box mb="5">
                <label>
                  <Form.Field name="first_name">
                    <Text mb="2" size="2" weight="medium" >Nombre</Text>
                    <Form.Control asChild >
                      <TextFieldInput mt="2" required mb="2" size="2" variant="surface" spellCheck="false" placeholder='Ingresa el/los nombres.'></TextFieldInput>
                    </Form.Control>
                    {/* <Form.Message match="valueMissing">
                        Campo requerido.
                    </Form.Message>
                    <Form.Message match="typeMismatch" forceMatch={serverErrors.email}>
                        Por favor digite un e-mail válido.
                    </Form.Message> */}
                  </Form.Field>
                </label>
              </Box>

              <Box mb="5">
                <label>
                  <Form.Field name="last_name">
                    <Text mb="2" size="2" weight="medium" >Apellidos</Text>
                    <Form.Control asChild >
                      <TextFieldInput mt="2" required mb="2" size="2" variant="surface" spellCheck="false" placeholder='Ingresa los apellidos.'></TextFieldInput>
                    </Form.Control>
                    {/* <Form.Message match="valueMissing">
                        Campo requerido.
                    </Form.Message>
                    <Form.Message match="typeMismatch" forceMatch={serverErrors.email}>
                        Por favor digite un e-mail válido.
                    </Form.Message> */}
                  </Form.Field>
                </label>
              </Box>

              <Box mb="5">
                <label>
                  <Form.Field name="email">
                    <Text mb="2" size="2" weight="medium" >Correo Electrónico</Text>
                    <Form.Control asChild >
                      <TextFieldInput mt="2" required type="email" mb="2" size="2" variant="surface" spellCheck="false" placeholder='Ingresa el e-mail.'></TextFieldInput>
                    </Form.Control>
                    {/* <Form.Message match="valueMissing">
                        Campo requerido.
                    </Form.Message>
                    <Form.Message match="typeMismatch" forceMatch={serverErrors.email}>
                        Por favor digite un e-mail válido.
                    </Form.Message> */}
                  </Form.Field>
                </label>
              </Box>

              <Box mb="5">
                <label>
                  <Form.Field name="password" serverInvalid={serverErrors.password}>
                    <Text mb="2" size="2" weight="medium" >Contraseña</Text>
                    <Form.Control asChild >
                      <TextFieldInput mt="2" required type="password" size="2" variant="surface" spellCheck="false" placeholder='Ingresa la contraseña temporal.'></TextFieldInput>
                    </Form.Control>
                    {/* <Form.Message match="valueMissing">
                        Campo requerido.
                    </Form.Message>
                    <Form.Message match="typeMismatch" forceMatch={serverErrors.password}>
                        Digite una contraseña.
                    </Form.Message> */}
                  </Form.Field>
                </label>
              </Box>

              <Flex display="flex" justify="end" gap="3" mt="6">
                <Form.Submit asChild>
                  <Button size="2" variant='solid' >Continuar</Button>
                </Form.Submit>
              </Flex>
            </Form.Root>
          </Card>


        </Flex>
      </Container>
    </main>
  )
}

export default ManagerForm;