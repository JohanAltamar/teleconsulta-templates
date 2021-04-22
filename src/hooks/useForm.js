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

  // FETCH DEPARTMENTS
  useEffect(() => {
    fetchDepartments();
  }, []);

  // CHECK LOCALSTORAGE AND ASSIGN VALUES TO STATE
  useEffect(() => {
    const stateSaved = JSON.parse(localStorage.getItem("teleconsulta"))
    if (!stateSaved) {
      localStorage.setItem("teleconsulta", JSON.stringify(initialState))
    }
    else {
      setValues(stateSaved)
      // console.log('setting state')
    }
    // console.log(stateSaved)
  }, [initialState])

  const reset = () => {
    setValues({ ...initialState });
    localStorage.setItem("teleconsulta", JSON.stringify(initialState))
    fetchDepartments();
  }

  const resetSomeFields = (...fields) => {
    const resetObject = {};
    fields.forEach(field => {
      resetObject[field] = initialState[field] || "";
    })

    setValues({ ...values, ...resetObject })

    localStorage.setItem("teleconsulta", JSON.stringify({ ...values, ...resetObject }))
  }


  const handleInputChange = ({ target }) => {

    setValues({
      ...values,
      [target.name]: target.value
    });

    localStorage.setItem("teleconsulta", JSON.stringify({ ...values, [target.name]: target.value }))
  }

  return [values, handleInputChange, reset, resetSomeFields];

}