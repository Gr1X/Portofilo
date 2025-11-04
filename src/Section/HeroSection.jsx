import React, {useRef} from 'react';
import VariableProximity from "../Components/VariableProximity.jsx";
import Particles from '../Components/Particles.jsx';
import RotatingText from '../Components/RotatingText.jsx';
import { Github, Linkedin, Mail } from 'lucide-react';


const handleAnimationComplete = () => {
    console.log('Animasi blur-in selesai!');
};
export default function HeroSection() {
    const containerRef = useRef(null);
    return (
        <section className="relative min-h-screen flex flex-col justify-center bg-black text-gray-100 overflow-hidden">
            <div className="m-20">
                <div className="mih-h-screen absolute inset-0 z-0">
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={400}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={false}
                        alphaParticles={true}
                        disableRotation={false}
                    />
                    
                </div>

                

                {/* Konten utama */}
                <div className="relative z-10 flex flex-col items-center">

                     {/* C. TAUTAN SOSIAL PROFESIONAL */}
                    {/* (Hapus 'tags' ungu yang lama) */}
                    <div className="flex gap-6 mb-4">
                        
                        {/* GitHub Link */}
                        <a 
                            href="https://github.com/Gr1X"
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="relative p-4 rounded-full flex items-center justify-center
                                        bg-[#170928]/50 backdrop-blur-lg border border-purple-700/60
                                        text-gray-300 hover:text-white hover:border-[#B873F8] 
                                        hover:shadow-[0_0_20px_rgba(184,115,248,0.5)]
                                        transition-all duration-300 hover:scale-110"
                            >
                                <Github size={24} />
                            </a>
        
                            {/* LinkedIn Link */}
                            <a 
                            // PERBAIKAN LINKEDIN: Tambahkan 'https://'
                                href="https://www.linkedin.com/in/gfrederico" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="relative p-4 rounded-full flex items-center justify-center
                                        bg-[#170928]/50 backdrop-blur-lg border border-purple-700/60
                                        text-gray-300 hover:text-white hover:border-[#B873F8] 
                                        hover:shadow-[0_0_20px_rgba(184,115,248,0.5)]
                                        transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin size={24} />
                            </a>

                            {/* Email Link */}
                            <a 
                                href="mailto:grfrederico32@gmail.com"
                                aria-label="Send an Email"
                                className="relative p-4 rounded-full flex items-center justify-center
                                        bg-[#170928]/50 backdrop-blur-lg border border-purple-700/60
                                        text-gray-300 hover:text-white hover:border-[#B873F8] 
                                        hover:shadow-[0_0_20px_rgba(184,115,248,0.5)]
                                        transition-all duration-300 hover:scale-110"
                            >
                                <Mail size={24} />
                            </a>
                    </div>

                    <div ref={containerRef} style={{position: 'relative'}}>
                        <VariableProximity
                            label={"Hi, I'm Frederico."}
                            className={'variable-proximity-demo text-6xl sm:text-7xl font-bold text-center'} 
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={200}
                            falloff='gaussian'
                            delay={200}
                            animateBy="letters"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                        />
                    </div>


                    {/*  */}
                    <p className="text-xl text-gray-300 max-w-2xl text-center mt-6">
                        I build responsive and intelligent applications to solve real-world problems.
                    </p>

                    <a
                        // === PERBAIKAN 1: Path href ===
                        href="/cv.pdf"
                        download="Gregorius_Frederico_cv.pdf"

                        // === PERBAIKAN 2: 'class' -> 'className' ===
                        // === PERBAIKAN 3: Padding & Tinggi Responsif ===
                        className="mt-4 font-sans cursor-pointer relative 
                                    bg-white/10 
                                    py-1 sm:py-2 rounded-full 
                                    min-h-[2.7rem] sm:min-h-[2.92rem] {/* Sedikit lebih kecil di mobile */}
                                    group max-w-full flex items-center justify-start 
                                    hover:bg-gradient-to-r from-[#D69DDE] to-[#B873F8] 
                                    transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] 
                                    shadow-[inset_1px_2px_5px_rgba(199,135,246,0.2)]"
                        >
                        <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                            <div
                            className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                            ></div>
                            <div
                            className="rounded-full shrink-0 flex justify-center items-center 
                                        shadow-[inset_1px_-1px_3px_0_#170928] h-full aspect-square 
                                        bg-gradient-to-r from-[#D69DDE] to-[#B873F8] 
                                        transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] 
                                        group-hover:bg-[#170928]"
                            >
                            <div
                                className="size-[0.8rem] 
                                        text-[#170928] group-hover:text-[#D69DDE] group-hover:-rotate-45 
                                        transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                                height="100%"
                                width="100%"
                                >
                                <path
                                    fill="currentColor"
                                    d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                                ></path>
                                </svg>
                            </div>
                            </div>
                        </div>
                        
                        {/* === PERBAIKAN 4: Padding Teks Responsif === */}
                        <div
                            className="
                            text-base sm:text-lg {/* Ukuran font responsif */}
                            text-white group-hover:text-[#170928]
                            
                            pl-[3rem] pr-[1rem] {/* Padding default (mobile) */}
                            sm:pl-[3.4rem] sm:pr-[1.1rem] {/* Padding desktop (sm:) */}
                            
                            group-hover:pl-[1rem] group-hover:pr-[3rem] {/* Padding hover (mobile) */}
                            sm:group-hover:pl-[1.1rem] sm:group-hover:pr-[3.4rem] {/* Padding hover (desktop) */}
                            
                            transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                        >
                            Download Resume
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}