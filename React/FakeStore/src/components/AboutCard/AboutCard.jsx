import './AboutCard.styles.scss';
import photo from '../../assets/photo.jpeg';
import github from '../../assets/github.png';
import gmail from '../../assets/gmail.png';
import linkedin from '../../assets/linkedin.png';

function AboutCard() {
  return (
    <div className="aboutcard">
      <div className="aboutcard__content">
        <div className="aboutcard__figure">
          <img src={photo} alt="profile" className="aboutcard__photo" />
        </div>
        <div className="aboutcard__info">
          <p className="aboutcard__name">Daniel Arteta Salazar</p>
          <p className="aboutcard__desc">
            FakeStore is a single-page aplication project created to practice React and CSS,
            especially flexbox and BEM notation.
          </p>
          <p className="aboutcard__desc--bold">Things I have learnt and applied:</p>
          <ul className="aboutcard__list">
            <li>BEM methodology.</li>
            <li>useState and useEffect React hooks.</li>
            <li>Fetch data.</li>
          </ul>
          <div className="aboutcard__links">
            <a href="mailto: danielatts97@gmail.com">
              <img alt="gmail" src={gmail} className="aboutcard__logo" />
            </a>
            <a href="https://github.com/Danatts">
              <img alt="github" src={github} className="aboutcard__logo" />
            </a>
            <a href="https://www.linkedin.com/in/danielartetasalazar/">
              <img alt="linkedin" src={linkedin} className="aboutcard__logo--linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
