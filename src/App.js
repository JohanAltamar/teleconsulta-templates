import { useState } from 'react';
import { AppContext } from './context/AppContext';
import RadioButtonsGroup from './components/RadioButtons';
import Displayer from './components/Form/Displayer';
import './App.css';

function App() {
  const [option, setOption] = useState("nuevo");

  return (
    <AppContext.Provider value={{ option, setOption }}>
      <RadioButtonsGroup />
      <Displayer />
    </AppContext.Provider>
  );
}

export default App;
