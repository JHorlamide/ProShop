import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import { getUserProfile, updateUserProfile } from '../../actions/userAction';

/* Custom Component */
import Loader from '../layouts/Loader';

/* React Bootstrap Components*/
import { Form, Button, Row, Col } from 'react-bootstrap';

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loading, user } = useSelector((state) => state.userDetails);

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user.name) {
        dispatch(getUserProfile('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return dispatch(setAlert('Passwords do not match', 'info'));
    } else {
      dispatch(updateUserProfile({ _id: user._id, name, email, password }));
      dispatch(setAlert('Profile updated', 'success'))
    }
  };

  return (
    <Row>
      {/* Profile */}
      <Col md={3}>
        <h1>Sign Up</h1>
        {loading && <Loader />}
        <Form onSubmit={(e) => handleSubmit(e)}>
          {/* Name */}
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={name}
              placeholder='Enter Name'
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Email */}
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={email}
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Password */}
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={password}
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              placeholder='Enter Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary' className='my-3'>
            Update
          </Button>
        </Form>
      </Col>

      {/* Orders */}
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
