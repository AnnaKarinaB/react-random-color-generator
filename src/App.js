import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button';
import ColoredBox from './ColoredBox';

function App() {
  // state variables
  const [color, setColor] = useState('');
  const [colorHue, setColorHue] = useState('');
  const [colorLuminosity, setColorLuminosity] = useState('');

  // styled components
  const StyleHeading = styled.h1`
    font-size: 40px;
    color: #000000;
    font-weight: 500;
    letter-spacing: 3px;
  `;

  return (
    <div className="App">
      <StyleHeading>Random Color Generator</StyleHeading>
      <div>
        {/* Creates two inputs to ask for a hue and luminosity. */}
        <label htmlFor="hue">Type in a hue:</label>
        <br />
        <input id="hue" onChange={(event) => setColorHue(event.target.value)} />
        <br />
        <br />
        <label htmlFor="luminosity">Type in luminosity:</label>
        <br />
        <input
          id="luminosity"
          onChange={(event) => setColorLuminosity(event.target.value)}
        />
        <br />
        <br />
        {/* Button component that onClick call randomColor() */}
        <Button
          text="Generate"
          onClick={() => {
            setColor(
              randomColor.randomColor({
                luminosity: colorLuminosity,
                hue: colorHue,
              }),
            );
          }}
        />
        <br />
        <br />
        <br />
        {/* ColoredBox component */}
        <ColoredBox color={color} />
      </div>
    </div>
  );
}

export default App;
