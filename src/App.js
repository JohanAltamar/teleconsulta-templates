import { useEffect, useRef, useState } from 'react';
import { AppContext } from './context/AppContext';
import { useForm } from './hooks/useForm';
import initialState from './utils/initialState';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {
  const [option, setOption] = useState("nuevo");
  const [formValue, handleInputChange, reset, resetSomeFields] = useForm(initialState);
  const [emailModal, setEmailModal] = useState(false);

  const formRef = useRef(null);
  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView()
    }
  }, [option])

  return (
    <AppContext.Provider value={{ option, setOption, formValue, handleInputChange, reset, resetSomeFields, setEmailModal, emailModal, formRef }}>
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
