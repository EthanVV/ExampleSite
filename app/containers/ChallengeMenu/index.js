import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30rem);
  grid-auto-rows: minmax(20rem, auto);
  justify-content: space-evenly;
  text-align: center;
  padding: 2rem;
  gap: 2rem;
`;

const ChallengeWrap = styled.div`
  background-color: #b5eecb;
  text-decoration: none;
  color: black;
  height: 100%;
  width: 100%;
`;

const Box = (props) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/challenges/${props.name}`}>
      <ChallengeWrap>{props.name}</ChallengeWrap>
    </Link>
  )
}

/* eslint-disable react/prefer-stateless-function */
export default class ChallengeMenu extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>Challenge Menu</Title>
        <Menu>
          <Box name="FizzBuzz" />
          <Box name="2nd" />
          <Box name="3rd" />
          <Box name="4th" />
          <Box name="5th" />
          <Box name="6th" />
          <Box name="7th" />
          <Box name="8th" />
          <Box name="9th" />
          <Box name="10th" />
        </Menu>
      </Wrapper>
    );
  }
}
