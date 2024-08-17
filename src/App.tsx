import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <div className=''>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
