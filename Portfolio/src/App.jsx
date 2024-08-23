import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
        {/* Background Image */}
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Hero />
          <Navbar />
          <Projects />
          <Bio />
          <Skill />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
