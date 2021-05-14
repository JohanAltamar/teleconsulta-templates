import { MenuItem } from "@material-ui/core";

import { useAppContext } from "../../../context/AppContext";
import { useStyles } from "./styles";

import Field from "../Inputs/Field";
import RadioButtonsGroup from "../Inputs/RadioButtons";
import DatePicker from "../Inputs/DatePicker";
import ControlButtons from "./ControlButtons";

const linksType = [
  "en el trabajo",
  "familiar",
  "origen desconocido",
  "social",
  "trabajador con alta movilidad",
  "trabajador del área de la salud",
];

const Form = () => {
  const classes = useStyles();
  const { formValue } = useAppContext();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // printReport(option, formValue);
    console.log(formValue);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      {/* Nombre del paciente */}
      <Field
        label="Nombre del paciente"
        placeholder="Altamar Rocha, Johan"
        name="name"
        required
      />

      {/* Identificacion del paciente */}
      <Field
        label="Identificación"
        placeholder="1140859656"
        name="id"
        required
      />

      {/* Edad del paciente */}
      <Field label="Edad" placeholder="42" name="age" type="number" required />

      {/* Telefono del paciente */}
      <Field
        label="Telefono"
        placeholder="3016902545"
        name="telephone"
        required
      />

      {/* Departamentos */}
      {formValue.departments && (
        <Field label="Departamento" name="department" select>
          {formValue.departments.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.departamento}
            </MenuItem>
          ))}
        </Field>
      )}

      {/* Municipios */}
      {formValue.departments && (
        <Field label="Ciudad" name="city" select>
          {formValue.departments[formValue.department].ciudades.map(
            (item, id) => (
              <MenuItem key={id} value={item}>
                {item}
              </MenuItem>
            )
          )}
        </Field>
      )}

      {/* <Field placeholder="Cra 25 # 25 - 25" label="Dirección" name="address" />

      <Field placeholder="Cedritos" label="Barrio" name="barrio" /> */}

      <Field placeholder="Médico" label="Ocupación" name="ocupation" />

      <RadioButtonsGroup
        label="Género"
        name="gender"
        options={[
          { _label: "Masculino", _value: "masculino" },
          { _label: "Femenino", _value: "femenino" },
        ]}
      />

      <Field
        placeholder="hijo, compañero, ..."
        label="Contacto con persona sospechosa"
        name="links"
      />

      <DatePicker label="Ultimo contacto" name="lastDate" disableFuture />

      <Field label="Tipo de nexo" name="linksType" select>
        {linksType.map((item, id) => (
          <MenuItem key={id} value={item}>
            {item}
          </MenuItem>
        ))}
      </Field>

      <DatePicker label="Inicio de sintomas" name="startDate" disableFuture />

      <Field
        placeholder="cefalea, etc ..."
        label="Síntomas Pasados"
        name="lastSymptoms"
      />

      <Field
        placeholder="cefalea, etc ..."
        label="Síntomas Actuales"
        name="symptoms"
      />

      <RadioButtonsGroup
        label="Tiene prueba?"
        name="test"
        options={[
          { _label: "Si", _value: "si" },
          { _label: "No", _value: "no" },
        ]}
      />

      {/* <RadioButtonsGroup
        label="Prueba cargada?"
        name="testLoaded"
        options={[
          { _label: "Si", _value: "si" },
          { _label: "No", _value: "no" },
        ]}
      /> */}

      <RadioButtonsGroup
        label="Resultado Prueba"
        name="testResult"
        options={[
          { _label: "Pos", _value: "positivo" },
          { _label: "Neg", _value: "negativo" },
          { _label: "Pend", _value: "pendiente" },
        ]}
      />

      <RadioButtonsGroup
        label="Tipo de prueba"
        name="testType"
        options={[
          { _label: "Antigenica", _value: "antigenica" },
          { _label: "PCR", _value: "PCR" },
        ]}
      />

      <DatePicker label="Día de toma de la prueba" name="testDate" />

      <Field
        placeholder="hipertensión, etc ..."
        label="Factores de riesgo"
        name="risks"
        multiline
        rowsMax={4}
      />

      {/* <Field
        placeholder="correo electrónico, otros..."
        label="Información adicional"
        name="extras"
        multiline
        rowsMax={4}
      /> */}

      <Field
        placeholder="nombre@example.com"
        label="Correo electronico"
        name="email"
      />

      {/* ! ULTIMO - BUTTONS CONTAINER */}
      <ControlButtons />
    </form>
  );
};

export default Form;
