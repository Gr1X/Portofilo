import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import { Github, ExternalLink, ArrowLeft, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);
  const [mainImage, setMainImage] = useState(project ? project.image : null);
  const fotoAwal = project.image;
  const otherImages = (project.galleryImages || []).filter(img => img !== fotoAwal);
  const gallery = [fotoAwal, ...otherImages];

  // Halaman Error
  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl text-red-500 mb-4">Project Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Go Back
        </button>
      </div>
    );
  }

  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <motion.div 
      className="min-h-screen bg-neutral-950 text-neutral-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }} // <-- SAMAKAN DURASI JADI 0.3s
    >
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <div className="max-w-4xl mx-auto py-24 sm:py-32 px-6 lg:px-8">
          
          {/* Tombol Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-neutral-400 hover:text-[#C787F6] transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back
          </button>

          {/* Judul & Subjudul */}
          <div className="text-left mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-neutral-400">{project.subtitle}</p>
          </div>

          {/* --- GALERI GAMBAR INTERAKTIF (PERBAIKAN ANIMASI) --- */}
          
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg relative">
            <AnimatePresence>
              <motion.img
                key={mainImage}
                src={mainImage}
                alt={project.title}
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* GRID THUMBNAIL (KONDISIONAL) */}
          {gallery.length > 1 && (
            // Sekarang ada 4 gambar, jadi kita gunakan grid-cols-4 di layar 'sm'
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 mb-10">
              {gallery.map((imgSrc, index) => ( // 'gallery' sekarang berisi [home, ticket, merch, payment]
                <motion.button
                  key={index}
                  onClick={() => handleThumbnailClick(imgSrc)}
                  className={`rounded-xl overflow-hidden aspect-video
                              focus:outline-none 
                              ${mainImage === imgSrc 
                                  ? 'ring-2 ring-[#B873F8] shadow-lg'
                                  : 'ring-2 ring-transparent'
                              }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={imgSrc}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          )}

          {/* Jarak jika hanya 1 gambar */}
          {gallery.length <= 1 && (
              <div className="mb-10"></div>
          )}
          
          {/* --- KONTEN TEKS --- */}
          <div className="text-left">
            
            {/* Deskripsi */}
            <div className="text-neutral-400 text-lg leading-relaxed space-y-4">
              {project.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <>
                <h3 className="text-3xl font-semibold mt-12 mb-5 pb-3">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-[#B873F8] flex-shrink-0" />
                      <span className="text-neutral-300 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-10 gap-10">
              {/* Tech Stack */}
              <div className="">
                <h3 className="text-3xl font-semibold mt-10 mb-5 pb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap justify-start gap-3">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm bg-purple-950/50 border border-purple-700/60 text-purple-300 px-4 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="">
                <h3 className="text-3xl font-semibold mt-10 mb-5 pb-3">
                  Links
                </h3>
                <div className="flex flex-wrap gap-6">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-neutral-300 hover:text-[#C787F6] transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-lg">View Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-neutral-300 hover:text-[#C787F6] transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-lg">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;