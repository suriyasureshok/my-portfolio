import CardNav from "./components/navbar/CardNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/experiences/Experience";
import { navItems } from "./components/navbar/navbarData";
import Projects from "./components/project/Projects";
import Skills from "./components/skills/Skills";
import CommunityAndBlogs from "./components/CommunityAndBlogs";
import ContactAndFooter from "./components/ContactAndFooter";

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <CardNav
        items={navItems}
        baseColor="#ffffff"
        menuColor="#000000"
        buttonBgColor="#000000"
        buttonTextColor="#fff"
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CommunityAndBlogs />
      <ContactAndFooter />
    </div>
  );
}
export default App;