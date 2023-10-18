import * as React from "react";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const PlateInfo = (props: any) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="ghost">
        <Box>
          <Card>
            <Flex direction="row" justify="start">
              <EyeOpenIcon />
              <Heading size="1" ml="7" mt="-1">
                {props.plate}
              </Heading>
            </Flex>
          </Card>
        </Box>
      </Button>
    </DialogTrigger>
  <DialogContent className="max-w-[500px] max-h-[600px]" style={{ backgroundColor: "white", display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
  
  <DialogHeader>
    <DialogTitle style={{ paddingRight: '3rem' }}>{props.plate}</DialogTitle>
  </DialogHeader>
  <DialogDescription>
    <DialogTitle style={{ marginBottom: '0.5rem' }}>Nombre del usuario</DialogTitle>
    <DialogDescription style={{ marginBottom: '1rem' }}>{props.username}</DialogDescription>
    <DialogTitle style={{ marginBottom: '0.5rem' }}>Fecha de registro</DialogTitle>
    <DialogDescription style={{ marginBottom: '1rem' }}>{props.first_time_registered}</DialogDescription>
    <DialogTitle style={{ marginBottom: '0.5rem' }}>Posibles promociones:</DialogTitle>
    {props.promos.map((promo: any, index: number) => (
      <DialogDescription key={index}>
        {promo}
      </DialogDescription>
    ))}
  </DialogDescription>
</DialogContent>
  </Dialog>
);

export default PlateInfo;
