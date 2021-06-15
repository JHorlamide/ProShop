import React, { Fragment } from 'react';
import products from '../../products';

/* React Bootstrap Component */
import { Row, Col } from 'react-bootstrap';

/* Custom Component */
import Products from '../product/Product';

const HomeScreen = () => {
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
