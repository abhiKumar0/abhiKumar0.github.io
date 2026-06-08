import Navbar from "./components/Navbar";
import { About, Contact, Education, Footer, Hero, Projects, Resume, Skills } from "./sections";


function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
