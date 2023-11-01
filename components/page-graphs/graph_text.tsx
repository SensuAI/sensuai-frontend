import { Card } from "@/components/ui/card";
import { Heading, Text } from "@radix-ui/themes";
import CarsTypeChart from "@/components/charts/cars_type";

const GraphText = (props: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
  <div className="col-span-1 md:col-span-1 lg:col-span-1">
    <div className="h-full"> 
      <Card className="p-4 h-full">
        <Heading style = {{marginLeft: "0.5rem", marginBottom: "1rem"}}>Visitas Históricas</Heading>
        <CarsTypeChart />
      </Card>
    </div>
  </div>

  <div className="col-span-1 md:col-span-1 lg:col-span-1 h-full">
  <Card className="p-4 h-full">
  {props.data.map((item: any) => (
        <Card className="p-1 m-3">
          <Heading style = {{marginLeft: "0.5rem"}}>{item[0]}</Heading>
          <Text style = {{marginLeft: "0.5rem"}}>{item[1]}</Text>
        </Card>
  ))}
  </Card>
  </div>
</div>

  );
};

export default GraphText;
