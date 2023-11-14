import * as React from "react";
import { useState, useEffect } from "react"; // Importa useState y useEffect
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Heading } from "@radix-ui/themes";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { getPlateStadistics } from "@/services/plate-service";
import { promos } from "@/services/promos-service";

const PlateInfo = (props: any) => {
  const { toast } = useToast();
  const [dataSatistics, setDataStadistics] = React.useState<any>([]);
  const [dataPromos, setDataPromos] = React.useState<any>([]);

  async function fetchPlateStadistics(plate: any) {
    try {
      const Response: any = await getPlateStadistics(plate);
      if (Response.status == "Success") {
        setDataStadistics(Response.data);
        setDataPromos(
          promos(
            Response.data.statistics.total_gas_consumption,
            Response.data.statistics.transactions_with_additional_services,
            Response.data.statistics.last_transaction_date,
            "Cash",
            Response.data.statistics.total_money_spent,
            Response.data.statistics.mean_duration_minutes_per_transaction
          )
        );
        toast({
          description: "Estadisticas obtenidas",
          duration: 5000,
        });
        // console.log(Response.data);
      } else {
        // toast({
        //   description: "Error getting statistics",
        //   duration: 5000,
        // });
        // console.log(Response);
      }
    } catch (error) {
      toast({
        description: "Error: " + error,
        duration: 5000,
      });
    }
  }
  // useEffect para manejar la apertura del diálogo
  useEffect(() => {
    fetchPlateStadistics(props.plate);
  }, []);

  function convertDate(propDate: any) {
    let date: Date = new Date(propDate);
    return date.toLocaleDateString();
  }

  return (
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
      <DialogContent
        className="max-w-[500px] max-h-[600px]"
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ paddingRight: "3rem" }}>
            {props.plate}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <DialogTitle style={{ marginBottom: "0.5rem" }}>
            Nombre del usuario
          </DialogTitle>
          <DialogDescription style={{ marginBottom: "1rem" }}>
            {props.username}
          </DialogDescription>
          <DialogTitle style={{ marginBottom: "0.5rem" }}>
            Fecha de registro
          </DialogTitle>
          <DialogDescription style={{ marginBottom: "1rem" }}>
            {convertDate(props.first_time_registered)}
          </DialogDescription>
          <DialogTitle style={{ marginBottom: "0.5rem" }}>
            Posibles promociones:
          </DialogTitle>
          {dataPromos.map((promo: any, index: number) => (
            <DialogDescription
              key={index}
              style={{
                borderRadius: "8px",
                border: "1px solid crimson",
                marginBottom: "0.5rem",
                marginTop: "0.5rem",
                padding: "0.5rem"
              }}
            >
              {promo}
            </DialogDescription>
          ))}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default PlateInfo;
