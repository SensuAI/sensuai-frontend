"use client";
import Image from "next/image";
import BackgroundSVG from "@/components/backgroundsvg";
import oxxosl from "../assets/oxxosl.jpg";

interface TeamMember {
    name: string;
    role: string;
    email: string;
    image: any;
  }
  
  const team: TeamMember[] = [
    {
      name: 'Nombre1',
      role: 'Carrera1',
      email: 'correo1@example.com',
      image: oxxosl,
    },
    {
      name: 'Nombre2',
      role: 'Carrera2',
      email: 'correo2@example.com',
      image: oxxosl,
    },
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