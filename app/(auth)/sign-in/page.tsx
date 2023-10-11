'use client';

import { Container, Flex, Heading, Text, Card, Box, TextFieldInput, Link, Button } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form';
import React from 'react';
import { cn } from "@/lib/utils"



import BackgroundSVG from '@/components/backgroundsvg';



function SignIn() {

  function submitForm(data: any) {
    console.log(data);
  }
  const [serverErrors, setServerErrors] = React.useState({
    email: false,
    password: false
  });
  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <BackgroundSVG />

      <Container size="1">
        <Flex direction="column" pb="4">
          <Heading align="center">¡Bienvenido de vuelta!</Heading>
          <Text align="center"> Por favor digita tus credenciales. </Text>
        </Flex>




        <Flex gap="4" direction="column" >
          <Card size="4" variant='surface' style={{ width: '400px' }}>
            <Box mb="4" height="7">
              <Heading size="6" >Iniciar Sesión</Heading>
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
                setServerErrors({ email: false, password: false })
              } >

              <Box mb="5">


                <label>

                  <Form.Field name="email">
                    <Text mb="2" size="2" weight="medium" >Correo Electrónico</Text>
                    <Form.Control asChild >
                      <TextFieldInput mt="2" required type="email" mb="2" size="2" variant="surface" spellCheck="false" placeholder='Ingresa tu e-mai.'></TextFieldInput>
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
              <Box position="relative" mb="5">
                {/* <Box position="absolute" top="0" right="0" style={{
                  marginTop: '-2px',
                }}>
                  <Link className="rt-Text rt-reset-a rt-reset-button rt-Link rt-underline-auto rt-r-size-2">¿Olvidaste tu contraseña?</Link>
                </Box> */}
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

              {/* <Box mb="5" mt="5">
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
              </Box> */}
              <Flex display="flex" justify="end" gap="3" mt="6">
              <Link
              key={1}
              href={"/sign-up"}
              className={cn(
                "flex items-center text-sm font-medium"
              )}
            >{"Crear Cuenta"}
            </Link> 
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

export default SignIn;



