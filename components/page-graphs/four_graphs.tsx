import {
    Card,
  } from "@/components/ui/card";
import { Heading } from "@radix-ui/themes";
import SimpleBarCharts from "@/components/charts/simple-bar-charts";
import PaymentPieChart from "@/components/charts/pay-pie-chart";
import HistogramBarChart from "@/components/charts/histogram_time";
import BranchIncomeBarChart from "@/components/charts/branch_income";
import VisitsDayChart from "@/components/charts/visits_day";
import ScatterTypeChart from "@/components/charts/scatter_type";


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
  { amount: "6500", time: "2", last_visited: "02/10/2023" },
  { amount: "7000", time: "3", last_visited: "03/10/2023" },
  { amount: "5000", time: "3", last_visited: "04/10/2023" },
  { amount: "6000", time: "2", last_visited: "05/10/2023" },
  { amount: "6500", time: "2", last_visited: "25/10/2023" },
  { amount: "16500", time: "1", last_visited: "21/10/2023" },
  { amount: "1200", time: "5", last_visited: "16/10/2023" },
  { amount: "6000", time: "2", last_visited: "11/10/2023" },
  { amount: "4000", time: "1", last_visited: "12/10/2023" },
  { amount: "8000", time: "3", last_visited: "13/10/2023" },
  { amount: "4000", time: "12", last_visited: "06/10/2023" },
  { amount: "5000", time: "5", last_visited: "01/10/2023" },
  { amount: "10000", time: "2", last_visited: "30/09/2023" },
  { amount: "4000", time: "1", last_visited: "25/10/2023" },
  { amount: "10000", time: "6", last_visited: "27/10/2023" },
  { amount: "10000", time: "6", last_visited: "27/10/2023" },
  { amount: "5000", time: "5", last_visited: "26/10/2023" }
];

  const FourGraphs = () => {
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
            <div className="mt-4">
            <HistogramBarChart data={data} />
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Ganancias por semana</Heading>
            <div className="mt-4">
            <BranchIncomeBarChart data={data} />
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Visitas por hora</Heading>
            <div className="mt-4">
            <VisitsDayChart />
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Litros vendidos y precio</Heading>
            <div className="mt-4">
            <ScatterTypeChart />
            </div>
          </Card>
        </div>
      </div>
  );
};
  
  export default FourGraphs;