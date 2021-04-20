import Swal from "sweetalert2"

const printNew = (values) => {
  values.name = values.name.split(",").reverse().join(" ")
  const report = `
    <h4>CASO NUEVO</h4>
    <span>Fecha de Toma: ${new Date().toLocaleDateString()}</span>
    <span>Ciudad: ${values.location}</span>
    <span>Número de documento: ${values.id}</span>
    <span>Nombre Completo: ${values.name}</span>
    <span>Caso #: ${values.caso}</span>
    <br>
    <span>Nombre: ${values.name}</span>
    <span>Número de documento: ${values.id}</span>
    <span>Edad: ${values.age}</span>
    <span>Telefono: ${values.telephone}</span>
    <span>Departamento: ${values.location.split(",")[1]}</span>
    <span>Ciudad: ${values.location.split(",")[0]}</span>
    <span>Dirección: ${values.address}</span>
    <span>Barrio: ${values.barrio}</span>
    <span>Ocupación: ${values.ocupation}</span>
    <span>Caso #: ${values.caso}</span>
    <span>Prioridad: ${values.priority}</span>
    <span>Lugar de toma: ${values.testPlace}</span>
    <span>Tipo de prueba: ${values.testType}</span>
    <span>Fecha de Inicio de síntomas: ${new Date(values.startDate).toLocaleDateString()}</span>
    <span>Síntomas: ${values.symptoms}</span>
    <span>Factores de riesgo / nexos: ${values.risks}</span>
    <span>Fecha de último contacto: ${new Date(values.lastDate).toLocaleDateString()}</span>
    <span>Datos adicionales: ${values.email} ${values.extras}</span>
  `
  const report2 = `
    CASO NUEVO
    Fecha de Toma: ${new Date().toLocaleDateString()}
    Ciudad: ${values.location}
    Número de documento: ${values.id}
    Nombre Completo: ${values.name}
    Caso #: ${values.caso}
    
    Nombre: ${values.name}
    Número de documento: ${values.id}
    Edad: ${values.age}
    Telefono: ${values.telephone}
    Departamento: ${values.location.split(",")[1]}
    Ciudad: ${values.location.split(",")[0]}
    Dirección: ${values.address}
    Barrio: ${values.barrio}
    Ocupación: ${values.ocupation}
    Caso #: ${values.caso}
    Prioridad: ${values.priority}
    Lugar de toma: ${values.testPlace}
    Tipo de prueba: ${values.testType}
    Fecha de Inicio de síntomas: ${new Date(values.startDate).toLocaleDateString()}
    Síntomas: ${values.symptoms}
    Factores de riesgo / nexos: ${values.risks}
    Fecha de último contacto: ${new Date(values.lastDate).toLocaleDateString()}
    Datos adicionales: ${values.email} ${values.extras}
  `
  return [report, report2]
}

const printSeguimiento = (values) => {
  values.name = values.name.split(",").reverse().join(" ")
  const report2 = `
    SEGUIMIENTO
    Nombre Completo: ${values.name}
    Número de documento: ${values.id}
    Edad: ${values.age}
    Telefono: ${values.telephone}
    Departamento: ${values.location.split(",")[1]}
    Ciudad: ${values.location.split(",")[0]}
    Caso #: ${values.caso}
    Tiene Prueba? ${values.test}
    Tipo de prueba: ${values.testType}
    Prueba cargada en el sistema? ${values.testLoaded}
    Resultado de prueba? ${values.testResult.toUpperCase()}
    Correo: ${values.email}
    `
  const report = `
    <h4>SEGUIMIENTO</h4>
    <span>Nombre Completo: ${values.name}</span>
    <span>Número de documento: ${values.id}</span>
    <span>Edad: ${values.age}</span>
    <span>Telefono: ${values.telephone}</span>
    <span>Departamento: ${values.location.split(",")[1]}</span>
    <span>Ciudad: ${values.location.split(",")[0]}</span>
    <span>Caso #: ${values.caso}</span>
    <span>Tiene Prueba? ${values.test}</span>
    <span>Tipo de prueba: ${values.testType}</span>
    <span>Prueba cargada en el sistema? ${values.testLoaded}</span>
    <span>Resultado de prueba? ${values.testResult.toUpperCase()}</span>
    <span>Correo: ${values.email}</span>
    `
  return [report, report2]
}

const printGeneral = (values) => {
  values.name = values.name.split(",").reverse().join(" ")
  const report = `
    <h4>${values.option.toUpperCase()}</h4>
    <span>Nombre Completo: ${values.name}</span>
    <span>Número de documento: ${values.id}</span>
    <span>Edad: ${values.age}</span>
    <span>Telefono: ${values.telephone}</span>
    <span>Departamento: ${values.location.split(",")[1]}</span>
    <span>Ciudad: ${values.location.split(",")[0]}</span>
    ${values.option === "alta covid" ? (
      "<span>Caso #: " + values.caso + "</span>"
    ) : ""}
  `
  const report2 = `
    ${values.option.toUpperCase()}
    Nombre Completo: ${values.name}
    Número de documento: ${values.id}
    Edad: ${values.age}
    Telefono: ${values.telephone}
    Departamento: ${values.location.split(",")[1]}
    Ciudad: ${values.location.split(",")[0]}
    ${values.option === "alta covid" ? (
      "Caso #: " + values.caso + ""
    ) : ""}
  `
  return [report, report2]
}

const printReinfeccion = (values) => {
  values.name = values.name.split(",").reverse().join(" ")
  const report = `
    <h4>REINFECCION</h4>
    <span>Nombre Completo: ${values.name}</span>
    <span>Número de documento: ${values.id}</span>
    <span>Edad: ${values.age}</span>
    <span>Telefono: ${values.telephone}</span>
    <span>Departamento: ${values.location.split(",")[1]}</span>
    <span>Ciudad: ${values.location.split(",")[0]}</span>
    <span>Prueba: ######################</span>
    <span>Ficha NO: ######################</span>
    <span>Datos adicionales: #############</span>

    `
  const report2 = `
    REINFECCION
    Nombre Completo: ${values.name}
    Número de documento: ${values.id}
    Edad: ${values.age}
    Telefono: ${values.telephone}
    Departamento: ${values.location.split(",")[1]}
    Ciudad: ${values.location.split(",")[0]}
    Prueba: ######################
    Ficha NO: ######################
    Datos adicionales: #############

    `
  return [report, report2]
}

const printReport = (option, formValue) => {

  const resultObject = { ...formValue };
  const { city, department, departments } = resultObject;
  resultObject.age += " años";
  resultObject.location = `${city}, ${departments[department].departamento}`;
  resultObject.option = option;

  let reports;

  switch (option) {
    case "nuevo":
      reports = printNew(resultObject)
      break;
    case "seguimiento":
      reports = printSeguimiento(resultObject)
      break;
    case "no contesta":
      reports = printGeneral(resultObject)
      break;
    case "doble agenda":
      reports = printGeneral(resultObject)
      break;
    case "no covid":
      reports = printGeneral(resultObject)
      break;
    case "alta covid":
      reports = printGeneral(resultObject)
      break;
    case "urgente":
      reports = printGeneral(resultObject)
      break;
    case "reinfeccion":
      reports = printReinfeccion(resultObject)
      break;
    default:
      break;
  }

  const [reportAlert, reportText] = reports;

  Swal.fire({
    html: reportAlert,
    confirmButtonText: "Copiar reporte"
  }).then((result) => {
    if (result.isConfirmed) {
      navigator.clipboard.writeText(reportText)
      Swal.fire({
        // position: 'top-end',
        icon:"success",
        title: 'Text copiado al portapapeles con éxito',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
}

export default printReport;