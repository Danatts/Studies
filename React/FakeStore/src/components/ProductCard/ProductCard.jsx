import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { numberToTime, getRandomNum } from './ProductCard.service';
import './ProductCard.styles.scss';

function ProductCard({ product }) {
  const ranNum = getRandomNum(60, 300);
  let [number, setNumber] = useState(ranNum);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (number >= 0) {
      const timer = setInterval(() => {
        number -= 1;
        setNumber(number);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [number]);

  useEffect(() => {
    if (number < 0) setDisabled(!disabled);
  }, [number]);

  const { id, title, image } = product;
  return (
    <div className="productcard">
      <div className="productcard__content">
        <div className="productcard__header">
          <p className="productcard__title">{title}</p>
        </div>
        <div className="productcard__figure">
          <img className="productcard__image" src={image} alt="producto" />
        </div>
        <div className="productcard__body">
          <span className="productcard__timer">
            {number >= 0 ? numberToTime(number) : 'Expired'}
          </span>
          <Link to={`/product/${id}`}>
            <button
              disabled={disabled}
              className={disabled ? 'productcard__button--disabled' : 'productcard__button'}
              type="button"
            >
              Detalles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object),
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

ProductCard.defaultProps = {
  product: {},
  id: null,
  title: 'Title',
  image: 'Image not found',
};

export default ProductCard;
