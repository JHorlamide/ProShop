import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions/productAction';

/* Custom Component */
import Products from '../product/Product';
import Loader from '../../components/layouts/Loader';
/* React Bootstrap Component */
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );


  useEffect(() => {
    const source = axios.CancelToken.source();

    dispatch(getProducts(source));

    return () => {
      return source.cancel('Request canceled');
    };
  }, [dispatch]);

  console.log('Products HomeScreen:', products);
  console.log('Loading HomeScreen:', loading);
  console.log('Error HomeScreen:', error);

  return (
    <Fragment>
      <h1>Latest Products</h1>
      {loading && error ? (
        <Loader />
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Products product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </Fragment>
  );
};

export default HomeScreen;
