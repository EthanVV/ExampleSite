import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
`;

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return <Title>Template</Title>;
  }
}
