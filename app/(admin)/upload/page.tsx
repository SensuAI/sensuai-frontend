"use client";
import * as React from "react";

import BackgroundSVG from "@/components/backgroundsvg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import jpgicon from "../../assets/jpg_icon.png";
import placas from "../../assets/placas.png";
export default function Upload() {
  const { toast } = useToast();

  function submitForm(data: any) {
    if (data) {
      toast({ description: data["Image"].name, duration: 3000 });
    } else {
      toast({ description: "No se pudo subir la imagen", duration: 3000 });
    }
  }

  return (
  <main>
  <BackgroundSVG />
  <div>
  <Flex justify="center" align="center" direction="row" mt="1">
        <Image
          style={{
            borderRadius: "8px",
            border: "1px solid crimson",
          }}
          src={placas}
          width= {400}
          height={200}
          alt="Placas"
          className="rounded-lg"
        />
  </Flex>
  </div>
  <div className="flex justify-center h-screen w-full pt-9">
    <div className="w-1/2 pl-11">
      <Flex justify="start" direction="column" align="center">
        <Card variant="classic">
          <Heading>¡Sube una placa de manera inmediata!</Heading>
          <Text mt="5" align="center" style={{ display: 'block' }}>
            Sube tu imagen como archivo para que este sea procesado en
            cuestión de segundos.
          </Text>
          <Text mt="5" align="center" style={{ display: 'block' }}>
            - Fácil y rápido
          </Text>
          <Text mt="5" align="center" style={{ display: 'block' }}>
            - Conectado con la nube
          </Text>
          <Text mt="5" align="center" style={{ display: 'block' }}>
            - Directamente desde tus archivos
          </Text>
        </Card>
      </Flex>
    </div>
    <div className="w-1/2">
      <Flex justify="center">
        <Card variant="classic" size="1" style={{ height: "25%" }}>
          <Form.Root
            onSubmit={(event) => {
              const data = Object.fromEntries(
                new FormData(event.currentTarget)
              );
              // Submit form data and catch errors in the response
              submitForm(data);
              // Prevent default form submission
              event.preventDefault();
            }}
          >
            <Form.Field name="Image">
              <Form.Label>¡Sube aquí el archivo de alguna placa!</Form.Label>
              <div className="flex justify-center items-center mb-5 mt-5">
                <Image
                  style={{
                    borderRadius: "8px",
                    border: "1px solid crimson",
                  }}
                  src={jpgicon}
                  width={100}
                  height={100}
                  alt="House Example"
                  className="rounded-lg"
                />
              </div>
              <Form.Control asChild>
                <Input id="picture" type="file" />
              </Form.Control>
            </Form.Field>
            <Flex display="flex" justify="center" gap="3" mt="6">
              <Form.Submit asChild>
                <Button size="2" variant="solid">
                  Subir
                </Button>
              </Form.Submit>
            </Flex>
          </Form.Root>
        </Card>
      </Flex>
    </div>
  </div>
  <Toaster />
</main>
);
}
