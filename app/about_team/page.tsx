"use client";
import Image from "next/image";
import BackgroundSVG from "@/components/backgroundsvg";
import David from "../assets/David.jpg";
import Eduardo from "../assets/BiologiaCV.png";
import Max from "../assets/MaxBA.jpg";
import Jorge from "../assets/JorgeB.jpg";
import Usuario from "../assets/normal.jpg";

// Página para mostrar el equipo de trabajo
interface TeamMember {
    name: string;
    role: string;
    email: string;
    image: any;
  }
  
  const team: TeamMember[] = [
    {
      name: 'David Damián Galán',
      role: 'Ingeniería en Sistemas Computacionales',
      email: 'a01752785@tec.mx',
      image: David,
    },
    {
      name: 'Eduardo Joel Cortéz Valente',
      role: 'Ingeniería en Sistemas Computacionales',
      email: 'a01746664@tec.mx',
      image: Eduardo,
    },
    {
      name: 'Maximiliano Benítez Ahumada',
      role: 'Ingeniería en Sistemas Computacionales',
      email: 'a01752791@tec.mx',
      image: Max,
    },
    {
      name: 'Jorge Isidro Blanco Martínez',
      role: 'Ingeniería en Sistemas Computacionales',
      email: 'a01745907@tec.mx',
      image: Jorge,
    },
    {
      name: 'Ainhara Itzae Mejía Rivera',
      role: 'Ingeniería en Ciencia de Datos y Matemáticas',
      email: 'a01745041@tec.mx',
      image: Usuario,
    }
    ,
    {
      name: 'Pablo Ortiz Aurrecoechea',
      role: 'Ingeniería en Ciencia de Datos y Matemáticas',
      email: 'a01023791@tec.mx',
      image: Usuario,
    }
    ,
    {
      name: 'Alejandro Somarriba Aguirre',
      role: 'Ingeniería en Ciencia de Datos y Matemáticas',
      email: 'a01751277@tec.mx',
      image: Usuario,
    }
    ,
    {
      name: 'Ximena Montserrat Sánchez Rubio',
      role: 'Ingeniería en Ciencia de Datos y Matemáticas',
      email: 'a01378326@tec.mx',
      image: Usuario,
    }
  ];

const AboutTeamPage: React.FC = () => {
  return (
    <main className="min-h-screenpy-6 flex flex-col justify-center sm:py-12">
      <BackgroundSVG />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-white-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">Equipo de Trabajo</h2>
            <div className="mt-4 space-y-6">
              {team.map((member, index) => (
                <div key={index} className="flex items-center space-x-4">
                   <Image className="w-10 h-10 rounded-full" src={member.image} alt={`Foto de ${member.name}`} width={40} height={40} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                    <p className="text-sm text-blue-500">{member.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutTeamPage;