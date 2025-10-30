// src/Components/RadioButtonGroup.jsx
import React, { useState } from "react";
// Impor ikon untuk dropdown
import { ChevronsUpDown, Check } from "lucide-react";
// Impor untuk animasi
import { motion, AnimatePresence } from "framer-motion";

const options = [
  { id: "radio0", label: "All", value: "all" },
  { id: "radio1", label: "React", value: "react" },
  { id: "radio2", label: "Laravel", value: "laravel" },
  { id: "radio3", label: "PHP", value: "php" },
  // Tambahkan filter lain jika perlu
];

export default function RadioButtonGroup({ onChange }) {
  const [selectedValue, setSelectedValue] = useState("all");
  // State baru untuk mengontrol buka/tutup dropdown di mobile
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  // Helper untuk mendapatkan label dari value yang terpilih
  const selectedLabel = options.find(opt => opt.value === selectedValue)?.label;

  return (
    <div className="w-full">
      {/* --- TAMPILAN DESKTOP (md:flex) --- 
        Akan tersembunyi (hidden) di mobile, dan tampil (md:flex) di desktop.
      */}
      <div className="hidden md:flex items-center gap-10">
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
              {/* RADIO BULAT (Tidak berubah) */}
              <div
                className={`w-6 h-6 rounded-full border-2 transition-all duration-300
                  ${ isActive ? "border-[#C787F6] shadow-[0_0_15px_rgba(199,135,246,0.7)]" : "border-[#512F7E]" }
                `}
                style={{
                  background: isActive ? "radial-gradient(circle, rgba(199,135,246,0.9) 0%, rgba(184,115,248,0.2) 70%)" : "transparent",
                }}
              ></div>
              {/* LABEL (Tidak berubah) */}
              <span
                className={`text-xl font-semibold uppercase ... ${ isActive ? "..." : "..." }`}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* --- TAMPILAN MOBILE (md:hidden) --- 
        Akan tampil (block) di mobile, dan tersembunyi (md:hidden) di desktop.
      */}
      <div className="relative md:hidden w-full max-w-xs">
        {/* Tombol Trigger Dropdown */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full h-12 px-4 py-2 flex items-center justify-between
                     text-left bg-[#170928] border-2 border-purple-700/60 rounded-lg
                     text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B873F8]"
        >
          <span className="text-lg uppercase tracking-tight">{selectedLabel}</span>
          <ChevronsUpDown size={20} className={`text-purple-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Menu Dropdown (Animasi) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="absolute top-full left-0 right-0 mt-2 w-full
                        bg-[#170928] border-2 border-purple-700/60 rounded-lg
                        shadow-lg overflow-hidden z-50"
            >
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    handleChange(option.value);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left text-lg uppercase tracking-tight
                             flex items-center justify-between
                             text-gray-200 hover:bg-purple-900/50
                             transition-colors duration-150"
                >
                  <span className={selectedValue === option.value ? "text-[#B873F8] font-semibold" : ""}>
                    {option.label}
                  </span>
                  {/* Tampilkan centang jika terpilih */}
                  {selectedValue === option.value && (
                    <Check size={20} className="text-[#B873F8]" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}