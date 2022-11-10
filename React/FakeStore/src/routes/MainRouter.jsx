import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import About from '../pages/About/About';
import Page404 from '../pages/Page404/Page404';
import {
  ROUTE_ABOUT, ROUTE_HOME, ROUTE_PRODUCT, ROUTE_404,
} from './routes.js';

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_PRODUCT} element={<Product />} />
        <Route path={ROUTE_ABOUT} element={<About />} />
        <Route path={ROUTE_404} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
