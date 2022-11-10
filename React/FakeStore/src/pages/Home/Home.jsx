import Menu from '../../components/Menu/Menu';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import './Home.styles.scss';

function Home() {
  return (
    <>
      <Menu />
      <div className="home__list">
        <ProductList />
      </div>
      <Footer />
    </>
  );
}

export default Home;
