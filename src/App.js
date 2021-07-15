import React from 'react'
import ListMusic from './components/ListMusic'
import Nav from './components/Nav';
import { MusicProvider } from './context/MusicContext';

function App() {
  return (
    <MusicProvider>
      <Nav />
      <ListMusic />
    </MusicProvider>
  );
}

export default App;
