const nuevo2 = (values) => {
  return `Paciente de ${values.age} años, ${values.risks ? "con antecedentes de " + values.risks : "sin antecedentes de riesgo"}, a quien se le brinda información y se le interroga por teleorientacion, manifiesta que inicia con síntomas el día ${new Date(values.startDate).toLocaleDateString()} dados por ${values.symptoms}, niega otra sintomatología. Actualmente se desempeña como ${values.ocupation}, refiere contacto con ${values.nexos}, último contacto ${new Date(values.lastDate).toLocaleDateString()}, ante los síntomas y la exposición, se clasifica paciente como caso sospechoso de covid-19, caso 2, se indica toma de prueba ${values.testType} ${values.testPlace}, se dan recomendaciones de lavado de manos y uso de tapabocas, se aclaran dudas, conoce signos de alarma. Entiende y acepta orientación médica.`
}

const nuevo5 = (values) => {
  return `Paciente de ${values.age} años de edad, ${values.risks ? "con antecedentes de " + values.risks : "sin antecedentes de riesgo"}, en ruta de atención de COVID 19, quien manifiesta/niega contacto estrecho ${values.nexos}, último contacto no protegido el día ${new Date(values.lastDate).toLocaleDateString()} quien se encuentra sin síntomas en el momento, de acuerdo a guías actuales, se clasifica en el momento como caso ${values.caso}, se indica toma de prueba ${values.testType} y se indica aislamiento hasta resultado de la prueba, no requiere incapacidad según lineamientos actuales. Se dan recomendaciones y signos de alarma sobre la enfermedad, se dan recomendaciones de aislamiento, uso de tapabocas y lavado de manos. Se comprueba que conoce signos de alarma y canales de atención. Refiere entender y aceptar.`
}

const reinfeccion = (values) => {
  return `Paciente de ${values.age} años, // sin antecedentes de importancia //, a quien se le brinda información y se le interroga por teleorientacion, manifiesta que //tuvo contacto con paciente positivo para covid-19 (familar de la esposa)//, último contacto no protegido el dia //17 de abril de 2021//, en el momento asintomático. Actualmente se desempeña como //auxiliar de enfermeria//, con antecedente de primoinfeccion por covid-19 en //diciembre de 2020//, a la fecha han transcurrido aproximadamente 120 días pero además recibió dosis de vacuna Pfizer el día 8 de abril de 2021, considero en el momento que paciente inicialmente presentaba inmunidad secundaria a primoinfeccion la cual se reforzó con dosis de vacuna, además de encontrarse asintomático, por lo que según lineamientos actuales para sospecha de reinfección se considera no ampliar estudios en personas asintomáticas por baja probabilidad de reinfección. Recomiendo al paciente que en caso de presentar síntomas leves reportar nuevamente a eps, en el momento no se indican otros estudios y puede continuar sus actividades cotidianas y laborales. Se dan recomendaciones de lavado de manos, uso de tapabocas, se aclaran dudas, conoce signos de alarma. Entiende y acepta orientación médica.`
}

const seguimientoPageHistory = (values) => {
  const symptomsDays = (start) => {
    const currentDate = new Date().getTime();
    const startDate = new Date(start).getTime();

    return ((currentDate - startDate)/(1000 * 60 * 60 * 24)).toFixed(0);
  }

  return `CONSENTIMIENTO INFORMADO: Me presento como médico parte del equipo de teleorientación y seguimiento COVID, explico al paciente que accederá a un servicio de teleorientación para seguimiento, orientación en salud y bienestar a través del cual se estudiarán de forma telefónica los síntomas que reporte, se establecerán recomendaciones, tratamiento, y seguimiento a seguir, en la medida en que sea posible desde la llamada telefónica. En ningún caso este servicio reemplaza la atención médica presencial, y tiene las restricciones propias del medio, por lo cual es posible que tras el análisis se recomienda acudir a un servicio presencial.

  Paciente ${values?.gender} de ${values?.age} años, municipio de ${values?.city}, ocupación: ${values?.ocupation}. Contacto con personas con diagnóstico de COVID 19: ${values?.links ? "SI" : "NO"}, ${values?.links ? values?.links + "," : ""}ultimo contacto estrecho que había reportado el ${new Date(values.lastDate).toLocaleDateString()}, se considera nexo ${values.linksType}. Consulta por presentar desde el ${new Date(values.startDate).toLocaleDateString()} ${values.lastSymptoms} únicamente, niega otra sintoma, tiene prueba ${values.testType} del ${new Date(values.testDate).toLocaleDateString()} ${values.testResult}, paciente niega fiebre, niega odinofagia, niega vomito, niega dificultad respiratoria, niega hemoptisis, niega confusión. Antecedentes personales: Pat: ${values.risks || "niega"}, Medicamentos: niega. Alergicos: niega, Qx: niega, Tx: niega. Vacuna de la influenza en el ultimo año:no, ABO en el ultima semana: no, En la llamada, alerta, consciente, colaborador, tranquilo, no se percibe disnea debido a que completa frases seguidas sin pausar a tomar aire, sin embargo presenta ${values.symptoms}, no se ha automedicado, hoy en día ${symptomsDays(values.startDate)}/10 de síntomas, considero que dado el tiempo de evolución aun requiere continuar en aislamiento y seguimiento telefónico, se prorroga incapacidad médica, se dan recomendaciones de hidratación y manejo de la tos en casa. Se explica a paciente y familiar sobre signos de alarma y canales de atención. Paciente entiende y acepta conducta médica.`
}

const getHcTemplate = (option, values, seguimientoPage) => {
  if (option === "nuevo" && values.caso === 5) {
    return nuevo5(values);
  } else if (option === "nuevo" && values.caso === 2) {
    return nuevo2(values);
  } else if (option === "reinfeccion") {
    return reinfeccion(values);
  } else if (seguimientoPage) {
    return seguimientoPageHistory(values);
  }
}

export default getHcTemplate;