
'use client';
import * as React from 'react';
import BackgroundSVG from '@/components/backgroundsvg';
import SimpleBarCharts from '@/components/charts/simple-bar-charts';

const data = [
    { month: "Enero", visits: 5000 },
    { month: "Febrero", visits: 6200 },
    { month: "Marzo", visits: 5800 },
    { month: "Abril", visits: 7200 },
    { month: "Mayo", visits: 6500 },
    { month: "Junio", visits: 6800 },
    { month: "Julio", visits: 6200 },
    { month: "Agosto", visits: 7200 },
    { month: "Septiembre", visits: 7600 },
    { month: "Octubre", visits: 8200 },
    { month: "Noviembre", visits: 8000 },
    { month: "Diciembre", visits: 8500 },
];

const BranchStatsPage = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <BackgroundSVG />
            {/* Encabezado */}
            <header className="text-center my-4">
                <h1 className="text-4xl font-bold">Estadísticas Globales</h1>
                <p className="text-lg text-gray-600">Visitas a todas las sucursales</p>
            </header>

            {/* Gráfico de barras */}
            <section className="rounded-lg p-6 shadow-md w-full md:w-2/3 lg:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Visitas Históricas</h2>
                <SimpleBarCharts
                inData={data} />
            </section>
        </div>
    );
};

export default BranchStatsPage;