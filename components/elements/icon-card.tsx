import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  const IconCard = (props: any) => {
    return (
        <Card>
      <CardHeader>
        <div className="flex items-center"> {/* Agregamos un contenedor flex para alinear elementos */}
          {props.icon && <div className="mr-2">{props.icon}</div>}
          <CardTitle>{props.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>{props.content}</p>
      </CardContent>
    </Card>
  );
};
  
  export default IconCard;
  