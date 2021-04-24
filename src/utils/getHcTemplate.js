const nuevo2 = (values) => {
  return `Paciente de ${values.age} años, ${values.risks ? "con antecedentes de " + values.risks : "sin antecedentes de riesgo"}, a quien se le brinda información y se le interroga por teleorientacion, manifiesta que inicia con síntomas el día ${new Date(values.startDate).toLocaleDateString()} dados por ${values.symptoms}, niega otra sintomatología. Actualmente se desempeña como ${values.ocupation}, refiere contacto con ${values.nexos}, último contacto ${new Date(values.lastDate).toLocaleDateString()}, ante los síntomas y la exposición, se clasifica paciente como caso sospechoso de covid-19, caso 2, se indica toma de prueba ${values.testType} ${values.testPlace}, se dan recomendaciones de lavado de manos y uso de tapabocas, se aclaran dudas, conoce signos de alarma. Entiende y acepta orientación médica.`
}

const nuevo5 = (values) => {
  return `Paciente de ${values.age} años de edad, ${values.risks ? "con antecedentes de " + values.risks : "sin antecedentes de riesgo"}, en ruta de atención de COVID 19, quien manifiesta/niega contacto estrecho ${values.nexos}, último contacto no protegido el día ${new Date(values.lastDate).toLocaleDateString()} quien se encuentra sin síntomas en el momento, de acuerdo a guías actuales, se clasifica en el momento como caso ${values.caso}, se indica toma de prueba ${values.testType} y se indica aislamiento hasta resultado de la prueba, no requiere incapacidad según lineamientos actuales. Se dan recomendaciones y signos de alarma sobre la enfermedad, se dan recomendaciones de aislamiento, uso de tapabocas y lavado de manos. Se comprueba que conoce signos de alarma y canales de atención. Refiere entender y aceptar.`
}
const getHcTemplate = (option, values) => {
  if (option === "nuevo" && values.caso === 5) {
    return nuevo5(values).toUpperCase();
  } else if (option === "nuevo" && values.caso === 2) {
    return nuevo2(values).toUpperCase();
  }
}

export default getHcTemplate;