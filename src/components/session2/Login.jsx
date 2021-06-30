import React from 'react';
import styled from 'styled-components';
import LoginInfo from './LoginInfo';

const Login = () => {
  return (
    <Modal>
      <LoginImage src="https://dummyimage.com/300x400/cfa6cf/7f52c7.jpg" />
      <LoginInfo />
    </Modal>
  );
};

const Modal = styled.div`
  border: 1px solid gray;
  margin: 100px auto;
  max-width: 600px;
  height: 400px;
  display: flex;
`;

const LoginImage = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
`;

export default Login;
