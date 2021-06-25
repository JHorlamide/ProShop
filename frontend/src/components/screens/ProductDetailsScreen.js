import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../actions/productAction';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';

/* Custom Component */
import Rating from '../../components/product/ProductRating';
import Loader from '../../components/layouts/Loader';

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const { product, loading } = useSelector((state) => state.productList);

  useEffect(() => {
    const source = axios.CancelToken.source();

    dispatch(getProduct(match.params.id, source));

    return () => {
      return source.cancel('Request canceled');
    };
  }, [dispatch, match.params.id]);

  /* addToCart Function */
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}/?qty=${qty}`);
  };

  return (
    <Fragment>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : (
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
                  value={product && product.rating ? product.rating : 0}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
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
                      {product.numberInStock > 0 ? 'In stock' : 'Out of stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {/* Quantity */}
                {product.numberInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.numberInStock).keys()].map(
                            (key) => (
                              <option
                                className='dropdown-item'
                                key={key + 1}
                                value={key + 1}
                              >
                                {key + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                {/* AddToCart */}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='btn-block btn-dark'
                    type='button'
                    disabled={product.numberInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default ProductScreen;
