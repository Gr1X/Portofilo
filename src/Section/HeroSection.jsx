import React, {useRef} from 'react';
import VariableProximity from "../Components/VariableProximity.jsx";
import Particles from '../Components/Particles.jsx';


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
                    <div ref={containerRef} style={{position: 'relative'}}>
                        <VariableProximity
                            label={"Hi, I'am Frederico"}
                            className={'variable-proximity-demo text-7xl'} 
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

                    {/* 3. TOMBOL / TAGS */}
                    <div className="grid grid-cols-2 gap-4 mt-8 mx-auto max-w-xl">
                        <button class="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group">
                            <div class="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]">
                                <div class="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
                            </div>
                            <div class="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
                            <div class="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
                            <div class="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
                            <div class="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
                            <div class="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
                            <div class="relative flex items-center justify-center gap-2">
                                <span class="text-lg  bg-gradient-to-b from-[#fffff9] to-[#B873F8] bg-clip-text 
                                text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter">
                                AI/ML Enthusiast
                                </span>
                            </div>
                            <div class="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 
                            to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
                        </button>

                        <button class="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group">
                            <div class="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]">
                                <div class="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
                            </div>
                            <div class="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
                            <div class="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
                            <div class="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
                            <div class="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
                            <div class="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
                            <div class="relative flex items-center justify-center gap-2">
                                <span class="text-lg  bg-gradient-to-b from-[#fffff9] to-[#B873F8] bg-clip-text 
                                text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter">
                                Web Developer
                                </span>
                            </div>
                            <div class="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 
                            to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}