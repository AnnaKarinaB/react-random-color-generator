import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';

const Div = styled.div`
  background-color: ${(props) => props.background};
`;

export default function App() {
  const [random, setRandom] = useState(randomColor());
  return (
    <div className="App">
      <h2>Generate random color</h2>
      <br />
      <br />
      <button onClick={() => setRandom(randomColor())}>Generate</button>
      <br />
      <br />
      <Div background={random}>Generated Color: {random}</Div>
    </div>
  );
}
