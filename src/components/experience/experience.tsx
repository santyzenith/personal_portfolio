import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
    {
        title: "Research and development technician",
        company: "Universidad del Azuay",
        period: "03/2023 - Present",
        description: [
            "- Development and integration of Large Language Models, LLMs in research and academic environments (Fine Tuning, RAG, Chatbots, etc.).",
            "- HPC development.",
            "- Runtime optimization of algorithms in Python and Artificial Intelligence libraries.",
            "- GPU-accelerated computing.",
            "- Task automation using generative AI provider services.",
            "- Machine learning.",
            "- Natural Language Processing ( cleaning, transformation, modeling, etc.).",
            "- Development and implementation of Computer Vision (YOLO) models in university facilities.",
            "- Scientific publications."
        ],
        technologies: ["Python", "Pandas", "Pytorch", "FastAPI", "HuggingFace", "Transformers"],
    },
    {
        title: "JAVA programming instructor",
        company: "Universidad del Azuay",
        period: "[03/2024 - 06/2024] - [09/2024 - 11/2024]",
        description: [
            "Programming I."
        ],
        technologies: ["Java"],
    },
    {
        title: "C++ programming instructor",
        company: "Universidad del Azuay",
        period: "[10/2023 - 01/2024] - [03/2025 - 06/2025]",
        description: [
            "C++ Fundamentals."
        ],
        technologies: ["C++"],
    },
];


export default function Timeline() {
    return (
        // <div className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-20 px-6">
        <div className="py-5 break-all md:break-normal">
            <div className="relative ml-2">
                {/* Timeline line */}
                <div className="absolute left-0 top-4 bottom-0 border-l-2" />

                {experiences.map(
                    ({ company, description, period, technologies, title }, index) => (
                        <div key={index} className="relative pl-4 pb-12 last:pb-0">
                            {/* Timeline dot */}
                            <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />

                            {/* Content */}
                            <div className="space-y-3">
                                <div className="flex flex-wrap items-centergap-2.5">
                                    <div className="shrink h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                                        <Building2 className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <span className="text-base font-medium">{company}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{title}</h3>
                                    <div className="flex items-center gap-2 mt-2 text-sm">
                                        <Calendar className="h-4 w-4" />
                                        <span>{period}</span>
                                    </div>
                                </div>
                                {description.map((line, i) => (
                                    <p
                                        key={i}
                                        className="text-sm sm:text-base text-muted-foreground text-pretty"
                                    >
                                        {line}
                                    </p>
                                ))}
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="rounded-full whitespace-normal break-all"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
