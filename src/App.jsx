import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import './app.scss'

const App = () => {
  return <div>
     <Cursor />
    <section>
      <Navbar />
      <Hero />
    </section>
   <section>
     <Parallax type='services'/>
  

    </section>

    <section>
     <Services />
    </section>
    <section>
    <Parallax/>
    </section>
         
    <Portfolio />
   
    <section>
      <Contact />
    </section>

 </div>;
};

export default App;
