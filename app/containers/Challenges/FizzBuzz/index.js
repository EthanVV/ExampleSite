import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

/* eslint-disable react/prefer-stateless-function */
export default class FizzBuzz extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>FizzBuzz</Title>
      </Wrapper>
    );
  }
}
