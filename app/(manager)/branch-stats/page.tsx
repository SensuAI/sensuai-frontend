
'use client';
import * as React from 'react';
import BackgroundSVG from '@/components/backgroundsvg';
import SimpleBarCharts from '@/components/charts/simple-bar-charts';

const BranchStatsPage = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <BackgroundSVG />
            {/* Encabezado */}
            <header className="text-center my-4">
                <h1 className="text-4xl font-bold">Estadísticas Globales</h1>
                <p className="text-lg text-gray-600">Sucursal de OXXO Gas</p>
            </header>

            {/* Gráfico de barras */}
            <section className="rounded-lg p-6 shadow-md w-full md:w-2/3 lg:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Visitas Históricas</h2>
                <SimpleBarCharts />
            </section>
        </div>
    );
};

export default BranchStatsPage;