import { useState } from 'react';
import { AppContext } from './context/AppContext';
import RadioButtonsGroup from './components/RadioButtons';
import Displayer from './components/Form/Displayer';
import './App.css';
import { useForm } from './hooks/useForm';
import initialState from './utils/initialState';
import EmailModal from './components/Modals/EmailModal';

function App() {
  const [option, setOption] = useState("nuevo");
  const [formValue, handleInputChange, reset, resetSomeFields] = useForm(initialState);
  const [emailModal, setEmailModal] = useState(false);

  const closeEmailModal = () => {
    setEmailModal(false)
  }

  return (
    <AppContext.Provider value={{ option, setOption, formValue, handleInputChange, reset, resetSomeFields, setEmailModal }}>
      <RadioButtonsGroup />
      <Displayer />
      <EmailModal open={emailModal} handleClose={closeEmailModal} />
    </AppContext.Provider>
  );
}

export default App;
