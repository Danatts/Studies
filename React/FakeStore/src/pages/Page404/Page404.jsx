import { Link } from 'react-router-dom';
import { ROUTE_HOME } from '../../routes/routes';
import './Page404.styles.scss';
import scarecrow from '../../assets/scarecrow.svg';

function Page404() {
  return (
    <>
      <p className="page404__subtitle">404 NOT FOUND</p>
      <div className="page404">
        <div className="page404__box">
          <img src={scarecrow} alt="scarecrow" />
        </div>
        <div className="page404__box">
          <h1 className="page404__title">I have bad news for you</h1>
          <p className="page404__notice">The page you are looking for might be removed or is temporarily unavailable</p>
          <Link to={ROUTE_HOME}>
            <button type="button" className="page404__button">BACK TO HOMEPAGE</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page404;
