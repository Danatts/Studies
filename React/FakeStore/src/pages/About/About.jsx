import Menu from '../../components/Menu/Menu';
import AboutCard from '../../components/AboutCard/AboutCard';
import Footer from '../../components/Footer/Footer';
import './About.styles.scss';

function About() {
  return (
    <>
      <Menu />
      <div className="about__card">
        <AboutCard />
      </div>
      <Footer />
    </>
  );
}

export default About;
