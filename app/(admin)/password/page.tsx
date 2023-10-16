"use client"
import * as React from "react"

import { Container, Flex, Heading, Card, Box, Button, Text, TextFieldInput } from '@radix-ui/themes'
import BackgroundSVG from "@/components/backgroundsvg"
import * as Form from '@radix-ui/react-form';
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Upload() {
  const {toast} = useToast();

  function submitForm(data: any) {    
    if ((data) && (data.newPassword === data.repPassword)){
        toast({description: data, duration: 3000})
    }
    else {
        toast({description: "No se pudo subir la información", duration: 3000})
    }
  }

  const [serverErrors, setServerErrors] = React.useState({
    newPassword: false,
    repPassword: false
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
    <BackgroundSVG/>
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
                setServerErrors({ newPassword: false, repPassword: false,})
              }>
      <Form.Field name ="newPassword">
        <Text mb="9" size="2" weight="medium">Nueva contraseña</Text>
        <Form.Control asChild required>
            <TextFieldInput mt="2" mb="4" type="password" id="newPassword"/>
        </Form.Control>
      </Form.Field>
      <Form.Field name ="repPassword">
        <Text mb="9" size="2" weight="medium">Repite la contraseña</Text>
        <Form.Control asChild required>
            <TextFieldInput mt="2" mb="4" type="password" id="repPassword"/>
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