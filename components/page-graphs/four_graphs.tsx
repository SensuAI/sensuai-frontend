import {
    Card,
  } from "@/components/ui/card";
import { Heading } from "@radix-ui/themes";
import SimpleBarCharts from "@/components/charts/simple-bar-charts";
import PaymentPieChart from "@/components/charts/pay-pie-chart";
import HistogramBarChart from "@/components/charts/histogram_time";
import BranchIncomeBarChart from "@/components/charts/branch_income";
  
  const FourGraphs = (props: any) => {
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
            <PaymentPieChart data01={props.data01} />
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Tiempo de transacciones</Heading>
            <HistogramBarChart data={props.data} />
          </Card>
        </div>

        <div>
          <Card className="p-4">
            <Heading>Ganancias por semana</Heading>
            <BranchIncomeBarChart data={props.data} />
          </Card>
        </div>
      </div>
  );
};
  
  export default FourGraphs;