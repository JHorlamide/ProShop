import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions/product';

/* React Bootstrap Component */
import { Row, Col } from 'react-bootstrap';

/* Custom Component */
import Products from '../product/Product';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    dispatch(getProducts(source));

    return () => {
      return source.cancel('Request canceled');
    };
  }, [dispatch]);
  
  console.log(loading);

  return (
    <Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Products product={product} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
