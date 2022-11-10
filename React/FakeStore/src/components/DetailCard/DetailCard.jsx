import PropTypes from 'prop-types';
import './DetailCard.styles.scss';

function DetailCard({ product }) {
  const {
    title, price, description, category, image, rating,
  } = product;

  if (!Object.prototype.hasOwnProperty.call(product, 'rating')) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="detailcard">
      <div className="detailcard__content">
        <div className="detailcard__figure">
          <img src={image} className="detailcard__image" alt="product" />
        </div>
        <div className="detailcard__info">
          <p className="detailcard__info--title">{title}</p>
          <p>{description}</p>
          <p>
            <strong>Price:&nbsp;</strong>
            {`$${price}`}
          </p>
          <p>
            <strong>Category:&nbsp;</strong>
            {category}
          </p>
          <p>
            <strong>Rate:&nbsp;</strong>
            {`${rating.rate} of ${rating.count}`}
          </p>
        </div>
      </div>
    </div>
  );
}

DetailCard.propTypes = {
  product: PropTypes.instanceOf(Object),
};

DetailCard.defaultProps = {
  product: {},
};

export default DetailCard;
