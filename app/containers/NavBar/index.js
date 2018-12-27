/*
 * NavBar
 *
 * This is our users static method of navigating our website, it should be displayed on all pages.
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
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

/* eslint-disable react/prefer-stateless-function */
export default class NavBar extends React.PureComponent {
  render() {
    return (
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
    );
  }
}
