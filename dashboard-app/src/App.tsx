import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ContactList from './components/ContactList'

function App() {
  return (
    <div className="container mt-4">
      <h2>Contactos</h2>
      <ContactList />
    </div>
  );
}

export default App;
