import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const SimpleCard = (props: any) => {
    return (
        <Card>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{props.content}</p>
        </CardContent>
      </Card>
    )
}

export default SimpleCard;