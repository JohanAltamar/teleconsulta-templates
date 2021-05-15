import { useEffect, useRef, useState } from 'react';
import { AppContext } from './context/AppContext';
import { useForm } from './hooks/useForm';
import initialState from './utils/initialState';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {
  const [option, setOption] = useState("nuevo");
  const [formValue, handleInputChange, reset, resetSomeFields, updateSomeFields] = useForm(initialState);
  const [emailModal, setEmailModal] = useState(false);
  const [hcModal, setHcModal] = useState(false);
  const [callsModal, setCallsModal] = useState(false);

  const formRef = useRef(null);
  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView()
    }
  }, [option])

  const contextValues = { option, setOption, formValue, handleInputChange, reset, resetSomeFields, updateSomeFields, setEmailModal, emailModal, formRef, hcModal, setHcModal, callsModal, setCallsModal };

  return (
    <AppContext.Provider value={contextValues}>
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
