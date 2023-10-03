'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-2xl font-semibold">Enlaces Rápidos</h3>
                        <ul className="mt-4">
                            <li className="my-2">
                                <a href="#">Inicio</a>
                            </li>
                            <li className="my-2">
                                <a href="#">Productos</a>
                            </li>
                            <li className="my-2">
                                <a href="#">Acerca de Nosotros</a>
                            </li>
                            <li className="my-2">
                                <a href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-2xl font-semibold">Contacto</h3>
                        <address className="mt-4">
                            <p>Av. Lago de Guadalupe</p>
                            <p>Margarita Maza de Juárez, C.P. 52926</p>
                            <p>Email: neibhob@templeos.com</p>
                            <p>Teléfono: (55) 3959-2605</p>
                        </address>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-2xl font-semibold">Síguenos</h3>
                        <ul className="mt-4">
                            <li className="my-2">
                                <a href="#">Facebook</a>
                            </li>
                            <li className="my-2">
                                <a href="#">Twitter</a>
                            </li>
                            <li className="my-2">
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h3 className="text-2xl font-semibold">Boletín de Noticias</h3>
                        <p className="mt-4">Suscríbete para recibir actualizaciones y ofertas especiales.</p>
                        <form className="mt-4">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                            />
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline" className="mt-3">Suscribirse</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>¡Funcionalidad en proceso!</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Por el momento esta funcionalidad no está disponible. Esta es una demo
                                            funcional, mantente al pendiente para futuras actualizaciones ;)
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogAction>Ok!</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
