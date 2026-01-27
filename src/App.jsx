import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Memberships from './components/Memberships';
import Prizes from './components/Prizes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import System from './components/System';

function App() {
  return (
    <div className="h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-body selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Memberships />
      <Prizes />
      <Contact />
      <System />
      <Footer />
    </div>
  );
}

export default App;
