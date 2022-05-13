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
  const Header = styled.header({
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: 3,
  });
  return (
    <div className="App">
      <Header>Random Color Generator</Header>
      <div>
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
        <ColoredBox color={color} />
      </div>
    </div>
  );
}

export default App;
