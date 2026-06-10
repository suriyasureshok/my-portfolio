import CardNav from "./components/navbar/CardNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/experiences/Experience";
import { navItems } from "./components/navbar/navbarData";
import Projects from "./components/project/Projects";
import Skills from "./components/skills/Skills";
import Community from "./components/Community";
import ContactAndFooter from "./components/ContactAndFooter";
import InvestigationBoard from "./components/brand/InvestigationBoard";

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <CardNav
        items={navItems}
      />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Community />
      <InvestigationBoard />
      <ContactAndFooter />
    </div>
  );
}
export default App;