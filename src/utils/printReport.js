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
  Swal.fire({
    html: report,
  })
}

const printSeguimiento = (values) => {
  values.name = values.name.split(",").reverse().join(" ")
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
  Swal.fire({
    html: report,
  })
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
  Swal.fire({
    html: report,
  })
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
  Swal.fire({
    html: report,
  })
}

const printReport = (option, formValue) => {

  const resultObject = { ...formValue };
  const { city, department, departments } = resultObject;
  resultObject.age += " años";
  resultObject.location = `${city}, ${departments[department].departamento}`;
  resultObject.option = option;

  switch (option) {
    case "nuevo":
      printNew(resultObject)
      break;
    case "seguimiento":
      printSeguimiento(resultObject)
      break;
    case "no contesta":
      printGeneral(resultObject)
      break;
    case "doble agenda":
      printGeneral(resultObject)
      break;
    case "no covid":
      printGeneral(resultObject)
      break;
    case "alta covid":
      printGeneral(resultObject)
      break;
    case "urgente":
      printGeneral(resultObject)
      break;
    case "reinfeccion":
      printReinfeccion(resultObject)
      break;
    default:
      break;
  }
}

export default printReport;