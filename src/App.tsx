import {
  Contact,
  Experience,
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
      </div>
    </>
  );
}

export default App;
