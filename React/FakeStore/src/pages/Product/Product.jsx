import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import DetailCard from '../../components/DetailCard/DetailCard';
import { getSingleProduct } from '../../services/products';
import './Product.styles.scss';

function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const data = await getSingleProduct(id);
      setProduct(data);
    };
    fetchSingleProduct(id);
  }, []);

  return (
    <>
      <Menu />
      <DetailCard product={product} />
    </>
  );
}

export default Product;
