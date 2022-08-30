import React, { useState } from 'react';
import {
  Button,
  Form,
  Toast,
  ToastContainer,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser, getUser } from '../../redux/users/user';

function Login({ handleClick }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    dispatch(loginUser(formDataObj.email, formDataObj.password));
    dispatch(getUser(formDataObj.email));
    setIsSubmitted(true);
    handleClick(true);
    setShow(true);
  };

  const renderForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        {/* {renderErrorMessage("email")} */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
        {/* {renderErrorMessage("password")} */}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Group className="mb-3" controlId="formBasicSignUp">
        <Link to="/user">Sign Up</Link>
      </Form.Group>
    </Form>
  );

  return (
    <div className="user-container" data-testid="user-a">
      <div className="app">
        <div className="login-form">
          {
            isSubmitted === true
              ? (
                <div>
                  <div> Welcome to Cars App! </div>
                  <ToastContainer className="p-3" position="middle-center">
                    <Toast className="d-inline-block m-1" bg="info" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                      <Toast.Header>
                        <strong className="me-auto">Cars App</strong>
                      </Toast.Header>
                      <Toast.Body className={'Info' === 'Dark' && 'text-white'}>You are logged In</Toast.Body>
                    </Toast>
                  </ToastContainer>
                </div>
              )
              : renderForm
          }
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Login;
