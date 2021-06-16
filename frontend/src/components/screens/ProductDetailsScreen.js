import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../actions/product';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../../products';

/* Custom Component */
import Rating from '../../components/product/ProductRating';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.productList);

  useEffect(() => {
    const source = axios.CancelToken.source();

    dispatch(getProduct(match.params.id, source));

    return () => {
      return source.cancel('Request canceled');
    };
  }, [dispatch, match.params.id]);

  console.log(products);
  console.log(loading);

  const product = products.find((product) => {
    return product._id === match.params.id;
  });

  return (
    <Fragment>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        {/* Image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        {/* Content */}
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item variant='flush'>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Testing */}
        <Col md={3}>
          <Card>
            <ListGroup>
              {/* Price */}
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* Status */}
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductScreen;
