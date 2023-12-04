import {
    Card, CardContent,
  } from "@/components/ui/card";
  import { Heading } from "@radix-ui/themes";
  import SimpleBarCharts from "@/components/charts/simple-bar-charts";
  import PaymentPieChart from "@/components/charts/pay-pie-chart";
  import HistogramBarChart from "@/components/charts/histogram_time";
  import BranchIncomeBarChart from "@/components/charts/branch_income";
  import VisitsDayChart from "@/components/charts/visits_day";
  import ScatterTypeChart from "@/components/charts/scatter_type";
  
  // Services
  import { typeOfPaymentCount } from "@/services/stadistics-service";
  
  import { useEffect, useState } from "react";
  
  // Componente para mostrar gráficas de estadísticas de admin
  const data01: any = [
    {
      name: "CreditCard",
      count: 2350,
    },
    {
      name: "DebitCard",
      count: 1150,
    },
    {
      name: "Cash",
      count: 2139,
    },
  ];
  
  // Tiempo de transacciones. Ganancias por semana
  const data = [
    { amount: "6500", time: "2", last_visited: "02/10/2023" },
    { amount: "7000", time: "3", last_visited: "03/10/2023" },
    { amount: "5000", time: "3", last_visited: "04/10/2023" },
    { amount: "6000", time: "2", last_visited: "05/10/2023" },
    { amount: "6500", time: "2", last_visited: "25/10/2023" },
    { amount: "16500", time: "1", last_visited: "21/10/2023" },
    { amount: "1200", time: "5", last_visited: "16/10/2023" },
    { amount: "6000", time: "2", last_visited: "11/10/2023" },
    { amount: "6000", time: "2", last_visited: "11/10/2023" },
    { amount: "4000", time: "1", last_visited: "12/10/2023" },
    { amount: "8000", time: "3", last_visited: "13/10/2023" },
    { amount: "6000", time: "2", last_visited: "16/10/2023" },
    { amount: "4000", time: "12", last_visited: "06/10/2023" },
    { amount: "5000", time: "5", last_visited: "01/10/2023" },
    { amount: "10000", time: "2", last_visited: "30/09/2023" },
    { amount: "4000", time: "1", last_visited: "25/10/2023" },
    { amount: "10000", time: "6", last_visited: "27/10/2023" },
    { amount: "10000", time: "6", last_visited: "27/10/2023" },
    { amount: "5000", time: "5", last_visited: "26/10/2023" }
  ];
  
  const transAndIncome = [
    // Semana 1
    { amount: 36000, time: 13, last_visited: "01/10/2023" },
    // Semana 2
    { amount: 25780, time: 8, last_visited: "08/10/2023" },
    // Semana 3
    { amount: 23609, time: 10, last_visited: "15/10/2023" },
    // Semana 4
    { amount: 35098, time: 9, last_visited: "22/10/2023" },
  ];
  
  const FourGraphsAdmin = () => {
    const [dataPaymentCount, setDataPaymentCount] = useState<any>([]);
  
    async function fetchData() {
      try {
        const response = await typeOfPaymentCount();
        setDataPaymentCount(response);
      }
      catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      fetchData();
      console.log(dataPaymentCount);
      //console.log(data01);
    }, []);
  
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <div>
          <Card className="p-4">
            <Heading>Visitas Históricas</Heading>
            <div className="mt-4">
              <SimpleBarCharts />
            </div>
          </Card>
        </div>
  
        <div>
          <Card className="p-4">
            <Heading>Tipo de pago</Heading>
            <div className="mt-4">
              <PaymentPieChart data01={data01} />
            </div>
          </Card>
        </div>
  
        <div>
        <Card className="p-4">
          <Heading>Tiempo de transacciones</Heading>
          <CardContent className="space-y-2">
          Tiempo promedio de la duración de las transacciones por semana
          <div>
            <HistogramBarChart data={transAndIncome} />
          </div>
          </CardContent>
        </Card>
      </div>
  
        <div>
          <Card className="p-4">
            <Heading>Ganancias por semana</Heading>
            <div className="mt-4">
              <BranchIncomeBarChart data={transAndIncome} />
            </div>
          </Card>
        </div>
  
        <div>
        <Card className="p-4">
          <Heading>Visitas por hora</Heading>
          <CardContent className="space-y-2">
          Visitas por hora del día
          <div>
            <VisitsDayChart />
          </div>
          </CardContent>
        </Card>
      </div>
  
        <div>
        <Card className="p-4">
          <Heading>Litros vendidos y precio</Heading>
          <CardContent>
          Litros, precio y tipo de gasolina vendida por transacción
          <div>
            <ScatterTypeChart />
          </div>
          </CardContent>
        </Card>
      </div>
      </div>
    );
  };
  
  export default FourGraphsAdmin;