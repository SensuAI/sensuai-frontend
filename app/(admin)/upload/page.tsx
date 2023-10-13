"use client"
import * as React from "react"

import BackgroundSVG from "@/components/backgroundsvg"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button, Flex } from "@radix-ui/themes"
import * as Form from '@radix-ui/react-form';
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Upload() {
  const {toast} = useToast();

  function submitForm(data: any) {
    if (data){
      toast({description: data["Image"].name, duration: 3000})
    }
    else {
        toast({description: "No se pudo subir la imagen", duration: 3000})
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
    <BackgroundSVG/>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Form.Root onSubmit={(event) => {
                const data = Object.fromEntries(new FormData(event.currentTarget));
                // Submit form data and catch errors in the response
                submitForm(data)
                // prevent default form submission
                event.preventDefault();
              }}>
      <Form.Field name ="Image">
        <Form.Label>¡Sube aquí el archivo de alguna placa!</Form.Label>
        <Form.Control asChild>
          <Input id="picture" type="file" />
        </Form.Control>
      </Form.Field>
      <Flex display="flex" justify="center" gap="3" mt="6">
      <Form.Submit asChild>
        <Button size="2" variant='solid' >Subir</Button>
      </Form.Submit>
      </Flex>
      </Form.Root>
    </div>
    <Toaster />
    </main>
  )
}