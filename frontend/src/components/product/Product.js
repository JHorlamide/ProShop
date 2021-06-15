import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* Custom Components */
import Rating from '../../components/product/ProductRating';

const Products = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      {/* Product Image */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        {/* Product Name */}
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* Rating & Reviews */}
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        {/* Description */}
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;
