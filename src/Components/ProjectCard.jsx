import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
    id,
    image,
    title,
    subtitle,
    description,
    techStack = [],
}) => {
    const navigate = useNavigate();

    return (
    <div
        onClick={() => id && navigate(`/projects/${id}`)}
        className="flex flex-col justify-between w-full p-6 bg-neutral-900/30 
                    hover:bg-neutral-900/50 transition-all duration-300 rounded-2xl 
                    cursor-pointer min-h-[480px]"
    >
        {/* IMAGE */}
        <div className="w-full mb-4">
            <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover rounded-2xl shadow-md"
            />
        </div>

        {/* TEXT INFO */}
        <div className="flex flex-col flex-grow gap-3 text-neutral-100">
            <h2 className="text-2xl font-semibold">{title}</h2>
            {subtitle && <p className="text-lg text-neutral-300">{subtitle}</p>}

            <p className="text-base leading-relaxed text-neutral-500 flex-grow">
            {description}
            </p>

            {/* Tech Stack */}
            {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((tech, index) => (
                <span
                    key={index}
                    className="text-sm border border-neutral-600 px-3 py-1 rounded-full"
                >
                    {tech}
                </span>
                ))}
            </div>
            )}
        </div>
    </div>
    );
};

export default ProjectCard;
