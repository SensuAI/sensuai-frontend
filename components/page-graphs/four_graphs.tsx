import {
    Card,
  } from "@/components/ui/card";
import { Heading } from "@radix-ui/themes";
import SimpleBarCharts from "@/components/charts/simple-bar-charts";
import PaymentPieChart from "@/components/charts/pay-pie-chart";
import HistogramBarChart from "@/components/charts/histogram_time";
import BranchIncomeBarChart from "@/components/charts/branch_income";


const data01: any = [
  {
    name: "CreditCard",
    value: 100,
  },
  {
    name: "DebitCard",
    value: 50,
  },
  {
    name: "Cash",
    value: 90,
  },
];

const data = [
  { amount: "650", time: "12", last_visited: "25/10/2023" },
  { amount: "1650", time: "1", last_visited: "21/10/2023" },
  { amount: "1200", time: "5", last_visited: "16/10/2023" },
  { amount: "600", time: "9", last_visited: "11/10/2023" },
  { amount: "400", time: "12", last_visited: "6/10/2023" },
  { amount: "500", time: "5", last_visited: "1/10/2023" },
  { amount: "1000", time: "2", last_visited: "30/09/2023" },
  { amount: "400", time: "11", last_visited: "25/09/2023" },
];

  const FourGraphs = () => {
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <div>
          <Card className="p-4">
            <Heading>Visitas Históricas</Heading>
            <SimpleBarCharts />
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Tipo de pago</Heading>
            <PaymentPieChart data01={data01} />
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Tiempo de transacciones</Heading>
            <HistogramBarChart data={data} />
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Ganancias por semana</Heading>
            <BranchIncomeBarChart data={data} />
          </Card>
        </div>
      </div>
  );
};
  
  export default FourGraphs;