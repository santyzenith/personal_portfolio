import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define el tipo de datos para cada experiencia laboral
type Experience = {
  title: string;
  company: string;
  date: string;
  description: string[];
  technologies: string[];
};

// Array con tu experiencia laboral
const workExperience: Experience[] = [
  {
    title: "Desarrollador Frontend Senior",
    company: "Innovatech Solutions",
    date: "Ene 2022 - Presente",
    description: [
      "Lideré el desarrollo de una nueva plataforma de análisis de datos usando Next.js y TypeScript.",
      "Mejoré el rendimiento del sitio web en un 30% optimizando el renderizado del lado del servidor (SSR).",
      "Implementé un sistema de diseño completo con Shadcn/UI y Tailwind CSS.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GraphQL"],
  },
  {
    title: "Ingeniero de Software",
    company: "Digital Creations",
    date: "Jun 2020 - Dic 2021",
    description: [
      "Desarrollé y mantuve aplicaciones web para clientes utilizando React y Node.js.",
      "Colaboré en equipos ágiles para entregar nuevas funcionalidades de manera semanal.",
      "Participé en la migración de una base de código legacy a una arquitectura moderna de microservicios.",
    ],
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Desarrollador Web Junior",
    company: "Web Starters Co.",
    date: "May 2019 - May 2020",
    description: [
      "Asistí en la creación de sitios web de marketing para pequeñas y medianas empresas.",
      "Aprendí y apliqué las mejores prácticas de desarrollo web responsivo con HTML, CSS y JavaScript.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
  },
];

export function ExperienceTimeline() {
  return (
    <section className="w-full max-w-3xl mx-auto py-8">
      <div className="relative">
        {/* La línea vertical de la timeline */}
        <div className="absolute left-6 top-0 h-full w-px bg-border"></div>

        {/* Mapeo de la experiencia laboral */}
        {workExperience.map((item, index) => (
          <div key={index} className="relative mb-10 pl-12">
            {/* El punto en la timeline */}
            <div className="absolute left-[1.10rem] top-1 h-3.5 w-3.5 rounded-full bg-primary border-2 border-background"></div>

            {/* Componente Card de Shadcn */}
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                    <CardDescription className="mt-1">{item.company}</CardDescription>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{item.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}