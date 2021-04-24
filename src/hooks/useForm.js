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
    const { from: initialFrom, appPassword: initialPassword, ...rest } = initialState;
    const { from, appPassword } = values;

    setValues({ ...values, ...rest });
    localStorage.setItem("teleconsulta", JSON.stringify({ from, appPassword, ...rest }))
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

  const updateSomeFields = (...fields) => {
    const updateObject = {};
    fields.forEach(({ name, value }) => {
      updateObject[name] = value;
    })

    setValues({ ...values, ...updateObject })

    localStorage.setItem("teleconsulta", JSON.stringify({ ...values, ...updateObject }))
  }


  const handleInputChange = ({ target }) => {
    const isObjectTarget = target.name.includes(".");
    const targetName = target.name.split(".")

    if (target.name === "testLoaded") {
      const testObject = {
        testResult: target.value === "no" ? "pendiente" : "positivo",
        testLoaded: target.value === "no" ? "no" : "si",
      }
      setValues({
        ...values,
        ...testObject
      });
    }
    else if (target.name === "caso") {
      setValues({
        ...values,
        [target.name]: target.value,
        testType: target.value === 5 ? "PCR" : "antigenica"
      });
    }
    else if (isObjectTarget) {
      setValues({
        ...values,
        [targetName[0]]: {
          ...values[targetName[0]],
          [targetName[1]]: target.value
        }
      })
    }
    else {
      setValues({
        ...values,
        [target.name]: target.value
      });
    }

    localStorage.setItem("teleconsulta", JSON.stringify({ ...values, [target.name]: target.value }))
  }

  return [values, handleInputChange, reset, resetSomeFields, updateSomeFields];

}