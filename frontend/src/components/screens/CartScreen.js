import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Button,
  Form,
  Card,
  Image,
  ListGroup,
} from 'react-bootstrap';
import { addToCart } from '../../actions/cart';
import axios from 'axios';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    const source = axios.CancelToken.source();

    if (productId) dispatch(addToCart(productId, qty, source));

    return () => {
      return source.cancel('Request canceled');
    };
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
