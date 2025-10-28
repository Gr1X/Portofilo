// RadioButtonGroup.jsx
import React, { useState } from "react";

const options = [
    { id: "radio0", label: "All", value: "all" },
    { id: "radio1", label: "React", value: "react" },
    { id: "radio2", label: "Laravel", value: "laravel" },
    { id: "radio3", label: "PHP", value: "php" },
];

export default function RadioButtonGroup({ onChange }) {
    const [selectedValue, setSelectedValue] = useState("all");

    const handleChange = (value) => {
        setSelectedValue(value);
        if (onChange) onChange(value);
    };

    return (
        <div className="flex items-center gap-10">
        {options.map((option) => {
            const isActive = selectedValue === option.value;
            return (
            <button
                key={option.id}
                onClick={() => handleChange(option.value)}
                className={`relative flex items-center gap-3 transition-all duration-500 
                ${isActive ? "scale-110" : "opacity-70 hover:opacity-100"}
                `}
            >
                {/* RADIO BULAT */}
                <div
                className={`w-6 h-6 rounded-full border-2 transition-all duration-300
                    ${
                    isActive
                        ? "border-[#C787F6] shadow-[0_0_15px_rgba(199,135,246,0.7)]"
                        : "border-[#512F7E]"
                    }
                `}
                style={{
                    background: isActive
                    ? "radial-gradient(circle, rgba(199,135,246,0.9) 0%, rgba(184,115,248,0.2) 70%)"
                    : "transparent",
                }}
                ></div>

                {/* LABEL */}
                <span
                className={`text-xl font-semibold uppercase tracking-tight transition-all duration-300
                    bg-clip-text text-transparent
                    ${
                    isActive
                        ? "bg-gradient-to-b from-white to-[#B873F8] drop-shadow-[0_0_12px_rgba(199,135,246,0.6)]"
                        : "bg-gradient-to-b from-[#888] to-[#3a2a4e]"
                    }
                `}
                >
                {option.label}
                </span>
            </button>
            );
        })}
        </div>
    );
}
