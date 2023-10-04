'use client';
import { Container, Flex, Heading, Text, Card, Box, TextFieldInput, Button } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form';
import React, { Fragment } from 'react';



const SucursalForm = () => {

    function submitForm(data: any) {
        console.log(data);
      }
      const [serverErrors, setServerErrors] = React.useState({
        SucursalName: false,
        State: false,
        City: false,
        Street: false,
        ZipCode: false
      });
      return(
      <Fragment>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
          <Container size="1">
            <Flex direction="column" pb="4">
              <Heading align="center">Da de alta una sucursal</Heading>
              <Text align="center"> Por favor introduce tu información. </Text>
            </Flex>
    
    
    
    
            <Flex gap="4" direction="column">
              <Card size="4" variant='surface' style={{ width: '400px' }}>
                <Box mb="4" height="7">
                  <Heading size="6">Registro de sucursal</Heading>
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
                    setServerErrors({ SucursalName: false,State: false, City: false, Street: false, ZipCode: false })
                  }>
    
                  <Box mb="5">
                    <label>
                      <Form.Field name="SucursalName">
                        <Text mb="2" size="2" weight="medium" >Nombre de la sucursal</Text>
                        <Form.Control asChild >
                          <TextFieldInput mt="2" required mb="2" size="2" variant="surface" spellCheck="false" placeholder='Ingresa el nombre de la sucursal.'></TextFieldInput>
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
                      <Form.Field name="State">
                        <Text mb="2" size="2" weight="medium" >Estado</Text>
                        <Form.Control asChild >
                          <TextFieldInput mt="2" required mb="2" size="2" variant="surface" spellCheck="false" placeholder='Ingresa el Estado.'></TextFieldInput>
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
                      <Form.Field name="City">
                        <Text mb="2" size="2" weight="medium" >Ciudad</Text>
                        <Form.Control asChild >
                          <TextFieldInput mt="2" required mb="2" size="2" variant="surface" spellCheck="false" placeholder='Ingresa la ciudad.'></TextFieldInput>
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
                      <Form.Field name="ZipCode" >
                        <Text mb="2" size="2" weight="medium" >Código Postal</Text>
                        <Form.Control asChild >
                          <TextFieldInput type="number" mt="2" required size="2" variant="surface" placeholder='Ingresa el C.P.'></TextFieldInput>
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
        </Fragment>
      );
};

export default SucursalForm;