import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Projects from '../components/Project';

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
