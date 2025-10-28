import React, { useRef, useState, useMemo } from 'react';
import VariableProximity from "../../Components/VariableProximity";
import { Github, ExternalLink } from 'lucide-react';
import RadioButtonGroup from '../../Components/RadioButtonGroup.jsx';
import ProjectCard from '../../Components/ProjectCard.jsx';
import { projectsData as projects } from '../../data/projectsData.jsx';

export default function PortofolioSection() {
    const containerRef = useRef(null);
    const [filter, setFilter] = useState("all");


    const filteredProjects = useMemo(() => {
        if (filter === "all") return projects;
        return projects.filter((p) =>
        p.techStack.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
        );
    }, [filter, projects]);

    return (
        <section id="projects" className="relative flex flex-col justify-center bg-black text-gray-100 py-20">
            <div className="m-20">
                <div className="relative z-10 flex flex-col">
                    <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                        label={"Portofolio."}
                        className={"variable-proximity-demo text-8xl"}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={200}
                        falloff="gaussian"
                        delay={200}
                        animateBy="letters"
                        direction="top"
                        />
                    </div>
                </div>

                <div className="my-8">
                    <RadioButtonGroup onChange={setFilter} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                        key={project.id}
                        id={project.id} 
                        image={project.image}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        techStack={project.techStack}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
