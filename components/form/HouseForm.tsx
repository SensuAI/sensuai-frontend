'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

const FormSchema = z.object({
    // street: z.string().min(1, {
    //     message: "This field is required.",
    // }),
    // neigh: z.string().min(1, {
    //     message: "This field is required.",
    // }),
    // postal: z.string().min(1, {
    //     message: "This field is required.",
    // }),
    // price: z.number().int(),
    LotArea: z.number().int(),
    GrLivArea: z.number().int(),
    FullBath: z.any(),
    HalfBath: z.any(),
    KitchenAbvGr: z.any(),
    GarageArea: z.number()

})

import AlertPrice from '../elements/alert-price';
import { getTest } from "@/services/ml-services"



const HouseForm = () => {
    const { toast } = useToast()
    const [testResponse, setTestResponse] = useState(null); // Usar estado para almacenar la respuesta
    const [price, setPrice] = useState(null); // Usar estado para almacenar la respuesta
    const [load, setLoad] = useState(false);

    // useEffect(() => {
    //     getTest().then((res) => {
    //         setTestResponse(res);
    //     });
    // }, []);

    const defaultValues = {
        // street: '',
        // neigh: '',
        // postal: '',
        price: 50,
        LotArea: 10516,
        GrLivArea: 1515,
        FullBath: 1,
        HalfBath: 1,
        KitchenAbvGr: 1,
        GarageArea: 472
    };

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues,
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('Data sended:', data)
        try {
            const response = await getTest();
            if (response) {
                toast({
                    title: "You submitted the following values:",
                    description: (
                        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                        </pre>
                    ),
                })
                setPrice(response)
                setLoad(true)
            } else {
                toast({
                    title: "Error",
                    description: "There was a problem with your request."
                })
            }
        } catch (error) {
            // Error en la operación
            console.error('Error:', error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    return (
        <Fragment>
            <Card className="w-[500px]">
                <CardHeader>
                    <CardTitle className="text-center">¡Cuéntanos todos los detalles!</CardTitle>
                    <CardDescription className="text-center">
                        {/* {testResponse ? testResponse : "Loading..."} */}
                    </CardDescription>
                </CardHeader>
                <CardContent>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                            {/* <FormField
                                control={form.control}
                                name="street"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="mt-6">Street</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Example: Glenn Dr. ... " {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                            <FormField
                                control={form.control}
                                name="LotArea"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>
                                            ¿Cuál es el tamaño de tu propiedad ideal? (LotArea)<br />
                                            {field.value} ft²
                                        </FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[10516]}
                                                max={20000}
                                                min = {2000}
                                                step={1}
                                                className={cn("")}
                                            />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="GrLivArea"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>
                                            Por favor comparte el tamaño de la construcción habitable dentro de la propiedad (GrLivArea)<br />
                                            {field.value} ft²
                                        </FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[1515]}
                                                max={4000}
                                                min={1000}
                                                step={1}
                                                className={cn("")}
                                            />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="FullBath"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>¿Cuántos baños completos necesitas? (FullBath)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Número de baños completos." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Número de baños completos.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="HalfBath"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>¿Cuántos medios baños necesitas? (HalfBath)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Número de medios baños." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Número de medios baños.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="KitchenAbvGr"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>¿Cuántas cocinas necesitas? (KitchenAbvGr)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Número de cocinas." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Número de cocinas.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="GarageArea"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel className='mb-6'>
                                            ¿Cuál es el tamaño de tu garage ideal? (GarageArea)<br />
                                            {field.value} ft²
                                        </FormLabel>
                                        <FormControl>
                                            <Slider
                                                onValueChange={(newValue) => field.onChange(newValue[0])}
                                                defaultValue={[472]}
                                                max={1000}
                                                min={260}
                                                step={1}
                                                className={cn("")}
                                            />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="postal"
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <FormLabel>Postal Code</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Enter your desired postal code." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="03487">03487</SelectItem>
                                                <SelectItem value="03721">03721</SelectItem>
                                                <SelectItem value="04567">04567</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Enter your desired postal code.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                            <CardFooter>
                                <Button className="w-full mt-6" type="submit">Submit</Button>
                            </CardFooter>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <AlertPrice open={load} setOpen={setLoad} price={price} />
        </Fragment>
    )
}

export default HouseForm
