import React from 'react'
import AddMusic from './components/AddMusic';
import ListMusic from './components/ListMusic'
import Nav from './components/Nav';
import { MusicProvider } from './context/MusicContext';

function App() {
  return (
    <MusicProvider>
      <Nav />
      <AddMusic />
      <ListMusic />
    </MusicProvider>
  );
}

export default App;
