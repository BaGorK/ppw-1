import {
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from './components';

function App() {
  return (
    <>
      <div className=''>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
