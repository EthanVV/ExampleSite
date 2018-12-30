import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

/* eslint-disable react/prefer-stateless-function */
export default class NavBar extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>Challenge Menu</Title>
      </Wrapper>
    );
  }
}
