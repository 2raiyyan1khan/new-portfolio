import "./App.css";

import NavBar from "./Components/NavBar";

import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Objective from "./Components/Objective";
import Hero from "./Components/Hero";

function App() {
  return (
    <main>
      <header className="bg-primary relative">
        <NavBar />
        <section className="container mx-auto md:py-28 pb-14 pt-28 mt-16">
          <Hero />
        </section>
      </header>
      <article className="container mx-auto pt-14">
        <section className="md:flex md:gap-8 gap-4  flex-col md:flex-row">
          <Objective />
          <Skills />
        </section>
      </article>
      <article className="container mx-auto py-14">
        <section className="md:flex gap-8   flex-col md:flex-row">
          <Experience />
          <Education />
        </section>
      </article>
      <Projects />
      <Contacts />

      <Footer />
    </main>
  );
}

export default App;
