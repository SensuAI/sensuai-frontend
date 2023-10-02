import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const ImgBox = (props: any) => {
    return (
        <section className="w-5/6 mx-auto p-8 mb-10">
            <div className="relative mb-16">
                <Image
                    src={props.image}
                    alt="Imagen de fondo"
                    className="w-full h-auto rounded-lg"
                />
                <Card className="absolute inset-x-0 bottom-0 mx-auto w-3/4 p-4 transform translate-y-1/2 -mb-1/2">
                    <CardHeader>
                        <CardTitle className="text-center">{props.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{props.text}</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="mx-auto">
                            <Link href="/predict">{props.buttonText}</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default ImgBox;