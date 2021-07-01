import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { saveShippingAddress } from '../../actions/cartAction';
import { setAlert } from '../../actions/alertAction';

/* Custom Component */
import FormComponent from '../../components/form_component/FormComponent';

const Shipping = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [shippingData, setShippingData] = useState({
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  const { address, city, country, postalCode } = shippingData;
  
  const onChange = (e) => {
    setShippingData({
      ...shippingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(address || city || country || postalCode)) {
      return dispatch(setAlert('Please provide the shipping data', 'info'));
    }

    dispatch(saveShippingAddress(shippingData));

    history.push('/payment');
  };

  return (
    <FormComponent>
      <h1>Shipping</h1>

      <Form onSubmit={handleSubmit}>
        {/* Address */}
        <Form.Group controlId='address' className='my-3'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            name='address'
            value={address}
            placeholder='Enter Address'
            onChange={(e) => onChange(e)}
          ></Form.Control>
        </Form.Group>

        {/* City */}
        <Form.Group controlId='city' className='my-3'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            name='city'
            value={city}
            placeholder='Enter City'
            onChange={(e) => onChange(e)}
          ></Form.Control>
        </Form.Group>

        {/* Country */}
        <Form.Group controlId='country' className='my-3'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            name='country'
            value={country}
            placeholder='Enter Country'
            onChange={(e) => onChange(e)}
          ></Form.Control>
        </Form.Group>

        {/* Postal Code */}
        <Form.Group controlId='postalCode' className='my-3'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            name='postalCode'
            value={postalCode}
            placeholder='Enter Name'
            onChange={(e) => onChange(e)}
          ></Form.Control>
        </Form.Group>

        {/*  */}
        <Button type='button' className='btn btn-dark my-3' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormComponent>
  );
};

export default Shipping;
