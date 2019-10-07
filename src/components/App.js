import React from 'react';
import '../App.css';
import Header from './Header.js';
import Intro from './Intro';
import OffCanvas from './OffCanvas';
function App() {
  return (
<React.Fragment>
    <Header />
    <Intro />
    <OffCanvas />
</React.Fragment>
  );
}

export default App;
