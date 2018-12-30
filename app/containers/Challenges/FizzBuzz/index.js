/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: black;
`;

const ChallengeMenu = styled.ChallengeMenu`
  display: grid;
  width: 70vw;
  height: 80vh;
  background-color: orange;
`;

/* eslint-disable react/prefer-stateless-function */
export default class FizzBuzz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <ChallengeMenu>test</ChallengeMenu>
      </div>
    );
  }
}
