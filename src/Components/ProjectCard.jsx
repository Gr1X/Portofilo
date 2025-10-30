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
        className="flex flex-col justify-between w-full 
                    bg-neutral-900/30 hover:bg-neutral-900/50 
                    transition-all duration-300 rounded-2xl cursor-pointer
                    p-4 sm:p-6" // <<< PERBAIKAN 1: Padding responsif
        // <<< PERBAIKAN 2: Hapus 'min-h-[480px]'
    >
        {/* IMAGE */}
        <div className="w-full mb-4">
            <img
            src={image}
            alt={title}
            className="w-full object-cover rounded-2xl shadow-md
                       h-60 sm:h-80" // <<< PERBAIKAN 3: Tinggi gambar responsif
            />
        </div>

        {/* TEXT INFO */}
        <div className="flex flex-col flex-grow gap-3 text-neutral-100">
            <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2> {/* <<< PERBAIKAN 4: Font responsif */}
            {subtitle && <p className="text-base sm:text-lg text-neutral-300">{subtitle}</p>} {/* <<< PERBAIKAN 5: Font responsif */}

            <p className="text-base leading-relaxed text-neutral-500 flex-grow 
                        line-clamp-3 sm:line-clamp-4"> {/* <<< PERBAIKAN 6: Line clamp responsif */}
            {description}
            </p>

            {/* Tech Stack (Sudah responsif dengan flex-wrap, jadi tidak diubah) */}
            {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((tech, index) => (
                <span
                    key={index}
                    className="text-sm bg-purple-950/50 border border-purple-700/60 text-purple-300 px-4 py-1.5 rounded-full"
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