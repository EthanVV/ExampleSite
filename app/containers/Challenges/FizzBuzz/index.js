import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  font-size: 1rem;
`;

const Title = styled.div`
  justify-self: left;
  font-size: 2.5rem;
  marign-left: 10rem;
`;

const Tile = styled.div`
  width: 100%;
  height: 100%;
  background: darkgrey;
  &.fizz {
    background: pink;
  }
  &.buzz {
    background: lightblue;
  }
  &.fizz-buzz {
    background: lavender;
  }
`;

Table.propTypes = {
  xDim: PropTypes.number.isRequired,
  yDim: PropTypes.number.isRequired,
};

function Table(props) {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${props.xDim}, 5rem)`,
    gridTemplateRows: `repeat(${props.yDim}, 5rem)`,
    justifyContent: 'center',
    gap: '0.5rem',
    justifySelf: 'center',
  };

  const tiles = [];

  for (let i = 0; i < props.xDim * props.yDim; i += 1) {
    tiles.push(TileMaker(i + 1));
  }

  return <Container style={gridStyle}>{[...tiles]}</Container>;
}

function TileMaker(i) {
  const uniqKey = `tile-${i}`;
  if (i % 15 === 0)
    return (
      <Tile className="fizz-buzz" key={uniqKey}>
        {i}
      </Tile>
    );
  if (i % 3 === 0)
    return (
      <Tile className="fizz" key={uniqKey}>
        {i}
      </Tile>
    );
  if (i % 5 === 0)
    return (
      <Tile className="buzz" key={uniqKey}>
        {i}
      </Tile>
    );
  return <Tile key={uniqKey} />;
}

/* eslint-disable react/prefer-stateless-function */
export default class FizzBuzz extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      xDim: 10,
      yDim: 10,
    };
  }

  render() {
    return (
      <Wrapper>
        <Title>Fizz Buzz</Title>
        <Table xDim={this.state.xDim} yDim={this.state.yDim} />
      </Wrapper>
    );
  }
}
