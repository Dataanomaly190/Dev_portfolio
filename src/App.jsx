import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";

export default function App() {
    return (
        <>
            {/* Fixed fullscreen background */}
            <div className="fixed inset-0 -z-10 bg-[#000000]" />
            {/* Page content */}
            <div className="relative z-10">
                <Home />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
            </div>
        </>
    );
}