'use client';
import { Container, Flex, Heading, Text, Card, Box, TextFieldInput, Link, Button } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form';
import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import BackgroundSVG from '@/components/backgroundsvg';

// Página para registrar un nuevo usuario
function SignUp() {

  function submitForm(data: any) {
    console.log(data);
  }
  const [serverErrors, setServerErrors] = React.useState({
    FirstName: false,
    LastName: false,
    email: false,
    password: false,
    role: false
  });
  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <BackgroundSVG />
      <Container size="1">
        <Flex direction="column" pb="4">
          <Heading align="center">Crea una cuenta</Heading>
          <Text align="center"> Por favor introduce tu información. </Text>
        </Flex>




        <Flex gap="4" direction="column">
          <Card size="4" variant='surface' style={{ width: '400px' }}>
            <Box mb="4" height="7">
              <Heading size="6">Regístrate</Heading>
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
                setServerErrors({ FirstName: false, LastName: false, email: false, password: false, role: false })
              }>

              <Box mb="5">
                <label>
                  <Form.Field name="FirstName">
                    <Text mb="2" size="2" weight="medium" >Nombre</Text>
                    <Form.Control asChild >
                      <TextFieldInput mt="2" required mb="4" size="2" variant="surface" spellCheck="false" placeholder='Ingresa tu nombre.'></TextFieldInput>
                    </Form.Control>
                    {/* <Form.Message match="valueMissing">
                    Campo requerido.
                </Form.Message>
                <Form.Message match="typeMismatch" forceMatch={serverErrors.email}>
                    Por favor digite un e-mail válido.
                </Form.Message> */}
                  </Form.Field>
                </label>
                <label>
                  <Form.Field name="LastName">
                    <Text mb="2" size="2" weight="medium" >Apellido</Text>
                    <Form.Control asChild >
                      <TextFieldInput mt="2" required mb="4" size="2" variant="surface" spellCheck="false" placeholder='Ingresa tu apellido.'></TextFieldInput>
                    </Form.Control>
                    {/* <Form.Message match="valueMissing">
                    Campo requerido.
                </Form.Message>
                <Form.Message match="typeMismatch" forceMatch={serverErrors.email}>
                    Por favor digite un e-mail válido.
                </Form.Message> */}
                  </Form.Field>
                </label>
                <label>
                  <Form.Field name="email">
                    <Text mb="2" size="2" weight="medium" >Correo Electrónico</Text>
                    <Form.Control asChild >
                      <TextFieldInput mt="2" required type="email" mb="4" size="2" variant="surface" spellCheck="false" placeholder='Ingresa tu e-mail.'></TextFieldInput>
                    </Form.Control>
                    {/* <Form.Message match="valueMissing">
                    Campo requerido.
                </Form.Message>
                <Form.Message match="typeMismatch" forceMatch={serverErrors.email}>
                    Por favor digite un e-mail válido.
                </Form.Message> */}
                  </Form.Field>
                </label>

                <label>
                  <Form.Field name="password" serverInvalid={serverErrors.password}>
                    <Text mb="2" size="2" weight="medium" >Contraseña</Text>
                    <Form.Control asChild >
                      <TextFieldInput mt="2" required type="password" size="2" variant="surface" spellCheck="false" placeholder='Ingresa tu contraseña.'></TextFieldInput>
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

              <Box mb="5" mt="5">
                <label>
                  <Form.Field name="role" serverInvalid={serverErrors.role}>
                    <Text mb="2" size="2" weight="medium" >Selecciona tu Rol</Text>
                    <Form.Control asChild>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="¿Cuál es tu rol?" />
                        </SelectTrigger>
                        <SelectContent >
                          <SelectItem value="Admin">Admin</SelectItem>
                          <SelectItem value="Gerente">Gerente</SelectItem>
                        </SelectContent>
                      </Select>
                    </Form.Control>
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

export default SignUp;


