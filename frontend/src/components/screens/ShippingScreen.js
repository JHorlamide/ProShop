import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { saveShippingAddress } from '../../actions/cartAction';

/* Custom Component */
import FormComponent from '../../components/form_component/FormComponent';

const Shipping = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [shippingData, setShippingData] = useState({
    address: shippingAddress.address,
    city: shippingAddress.city,
    country: shippingAddress.country,
    postalCode: shippingAddress.postalCode,
  });

  const { address, city, country, postalCode } = shippingData;

  // const [address, setAddress] = useState(shippingAddress.address);
  // const [city, setCity] = useState(shippingAddress.city);
  // const [country, setCountry] = useState(shippingAddress.country);
  // const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  console.log(shippingAddress);

  const onChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      saveShippingAddress({
        address,
        city,
        country,
        postalCode,
      })
    );
    history.push('/payment');
  };

  return (
    <FormComponent>
      <h1>Shipping</h1>

      <Form onSubmit={handleSubmit}>
        {/* Address */}
        <Form.Group controlId='email'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='address'
            value={address}
            placeholder='Enter Name'
            onChange={(e) => onChange(e)}
          ></Form.Control>
        </Form.Group>
        {/* City */}

        {/* Country */}

        {/* Postal Code */}

        <Button
          type='button'
          className='btn btn-lg btn-block btn-dark my-3'
          variant='primary'
        >
          Continue
        </Button>
      </Form>
    </FormComponent>
  );
};

export default Shipping;
