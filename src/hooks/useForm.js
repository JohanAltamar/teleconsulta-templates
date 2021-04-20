import { useEffect, useState } from 'react';


export const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState);

  const fetchDepartments = () => {
    fetch(
      "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json"
    )
      .then((response) => response.json())
      .then((data) => setValues(v => ({ ...v, departments: data })));
  }

  useEffect(() => {
    fetchDepartments();
  }, []);

  const reset = () => {
    setValues({ ...initialState });
    fetchDepartments();
  }


  const handleInputChange = ({ target }) => {

    setValues({
      ...values,
      [target.name]: target.value
    });

  }

  return [values, handleInputChange, reset];

}