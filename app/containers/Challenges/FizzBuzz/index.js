import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Container = styled.div`
  font-size: 1rem;
`;

const Title = styled.div`
  font-size: 2.5rem;
`;

const Tile = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
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

const SlideWrapper = styled.div`
  width: 40rem;
  height: 2rem;
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
  justify-self: 'center';
  .slider {
    width: 100%;
    height: 25px;
    background: purple;
    outline: none;
    opacity: 0.7;
  }
`;

Table.propTypes = {
  xDim: PropTypes.number.isRequired,
  yDim: PropTypes.number.isRequired,
};

function Table(props) {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${props.xDim}, 2rem)`,
    gridTemplateRows: `repeat(${props.yDim}, 2rem)`,
    justifyContent: 'center',
    gap: '0.5rem',
    justifySelf: 'center',
    textAlign: 'center',
    paddingTop: '2rem',
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

  updateY(val) {
    console.log(val);
    this.setState({ yDim: val });
  }

  updateX(val) {
    console.log(val);
    this.setState({ xDim: val });
  }

  render() {
    return (
      <Wrapper>
        <Title>Fizz Buzz</Title>
        <SlideWrapper>
          <input
            id="X"
            type="range"
            min="1"
            max="50"
            step="1"
            value={this.state.xDim}
            className="slider"
            onChange={e => this.updateX(e.target.value)}
          />
        </SlideWrapper>
        <SlideWrapper>
          <label htmlFor="y-slider">Y-Slider</label>
          <input
            id="Y"
            type="range"
            min="1"
            max="50"
            step="1"
            value={this.state.yDim}
            className="slider"
            onChange={e => this.updateY(e.target.value)}
          />
        </SlideWrapper>
        <Table xDim={this.state.xDim} yDim={this.state.yDim} />
      </Wrapper>
    );
  }
}
