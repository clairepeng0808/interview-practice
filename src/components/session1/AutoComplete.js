import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const productData = [
  {
    name: 'Nike',
    domain: 'nike.com',
    logo: 'https://logo.clearbit.com/nike.com',
  },
  {
    name: 'Nike Vision',
    domain: 'nikevision.com',
    logo: 'https://logo.clearbit.com/nikevision.com',
  },
  {
    name: 'NikeTalk',
    domain: 'niketalk.com',
    logo: 'https://logo.clearbit.com/niketalk.com',
  },
  {
    name: 'NIKE SB',
    domain: 'nikesb.com',
    logo: 'https://logo.clearbit.com/nikesb.com',
  },
  {
    name: 'Nike Discount Codes',
    domain: 'nike-discount-codes.com',
    logo: 'https://logo.clearbit.com/nike-discount-codes.com',
  },
];

const AutoComplete = () => {
  const nameRef = useRef(null);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const inputValue = nameRef.current.value;
    if (inputValue === '') {
      setData([]);
    } else {
      let re = new RegExp(inputValue, 'i');
      const menu = productData.filter((product) => product.name.match(re));
      const nameMenu = menu.map((item) => item.name);
      setData(nameMenu);
    }
  };

  return (
    <Wrapper>
      <Title>AutoComplete</Title>
      <Label>Name</Label>
      <Input ref={nameRef} onChange={handleChange} type="text" />
      {data.length > 0 && (
        <Menu>
          {data.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </Menu>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Input = styled.input`
  margin: 16px;
`;

const Menu = styled.div`
  list-style: none;
`;

export default AutoComplete;
