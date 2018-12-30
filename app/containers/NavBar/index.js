import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.h1`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-size: 1.5em;
  text-align: center;
  color: black;
  padding: 0;
  margin: 0;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(84, 84, 84, 0.5);
  -moz-box-shadow: 0px 3px 6px 0px rgba(84, 84, 84, 0.5);
  box-shadow: 0px 3px 6px 0px rgba(84, 84, 84, 0.5);
`;

const Button = styled.button`
  background-color: #555555;
  border: none;
  color: white;
  margin: 0;
  padding: 0, 0;
  text-align: center;
  font-size: 2rem;
  width: 100%;
  height: 4rem;
  flex-basis: auto;
  flex-grow: 1;
  cursor: pointer;
  &:hover ${Button} {
    background-color: black;
  }
`;

/* temporary solution to style buttons when placed inside Link -FIXME */
const buttonWrap = {
  flexBasis: 'auto',
  flexGrow: 1,
  textAlign: 'center',
};

/* eslint-disable react/prefer-stateless-function */
export default class NavBar extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Link style={buttonWrap} to="/">
          <Button>Home</Button>
        </Link>
        <Link style={buttonWrap} to="/ChallengeMenu">
          <Button>Challenges</Button>
        </Link>
        <Link style={buttonWrap} to="/">
          <Button>Charlie</Button>
        </Link>
        <Link style={buttonWrap} to="/">
          <Button>Delta</Button>
        </Link>
        <Link style={buttonWrap} to="/">
          <Button>Echo</Button>
        </Link>
        <Link style={buttonWrap} to="/">
          <Button>Foxtrot</Button>
        </Link>
      </Wrapper>
    );
  }
}
