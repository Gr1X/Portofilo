import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HeroSection from './Section/HeroSection';
import AboutSection from './Section/AboutSection';
import PortofolioSection from './Section/Portofolio/PortofolioSection';
import ContactSection from './Section/ContactSection';
import CvSection from './Section/CvSection';
import Footer from './Components/Footer';
import GradualBlur from './Components/GradualBlur.jsx';
import ProjectDetails from "./Section/Portofolio/ProjectDetails.jsx";
import { useLocation } from "react-router-dom";
import useSmoothScroll from "./hooks/useSmoothScroll.jsx";
import Particles from './Components/Particles.jsx';

function App() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];
  
  useSmoothScroll();
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/projects/');
  const showFooter = location.pathname === '/';
  const showParticles = location.pathname === '/';

  return (
    <div className="font-sans bg-black"> 
      {showParticles && (
        <div className="fixed inset-0 z-0 pointer-events-none"> {/* Fixed position, behind content */}
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={400} 
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100} // This seems large, maybe try smaller like 2 or 3?
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
      )}

      {/* {showNavbar && (
        <Navbar
          logo={logo}
          logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#ffffffff"
          buttonBgColor="#ffffffff"
          buttonTextColor="#000000ff"
          ease="power3.out"
        />
      )} */}

      {/* MAIN ROUTES */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <PortofolioSection />
              </>
            }
          />

          <Route path="/cv" element={<CvSection />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>

      {/* FOOTER — tampil di semua halaman */}
      {showFooter && <Footer />}

      {/* GRADUAL BLUR — efek dekoratif */}
      <GradualBlur
        target="page"
        position="bottom"
        height="5rem"
        strength={1}
        divCount={5}
        curve="bezier"
        exponential={false}
        opacity={0.8}
      />
    </div>
  );
}

export default App;
