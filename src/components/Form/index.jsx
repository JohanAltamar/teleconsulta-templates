import { useContext } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Swal from "sweetalert2";

import { AppContext } from "../../context/AppContext";
import printReport from "../../utils/printReport";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    maxWidth: "100%",
    padding: theme.spacing(2),
    "& > *": {
      marginBottom: theme.spacing(2),
      minWidth: "calc(33.3% - 6px)",
      maxWidth: "calc(33.3% - 6px)",
      "&:nth-child(3n - 1)": {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
      },
      "& > .MuiFormGroup-root": {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      },
    },
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Field = ({ children, ...rest }) => {
  return (
    <TextField variant="outlined" fullWidth {...rest}>
      {children}
    </TextField>
  );
};

const Form = ({ option, caseField, hasTest }) => {
  const classes = useStyles();
  const { formValue, handleInputChange, reset, setEmailModal } = useContext(
    AppContext
  );

  const {
    name,
    id,
    age,
    telephone,
    departments,
    department,
    city,
    caso,
    test,
    testType,
    testLoaded,
    testResult,
    email,
    address,
    barrio,
    ocupation,
    priority,
    testPlace,
    startDate,
    symptoms,
    risks,
    lastDate,
    extras,
    from,
    appPassword,
    testDate,
    ficha,
  } = formValue;

  const handleDateChange = (name, date) => {
    handleInputChange({
      target: {
        name,
        value: date,
      },
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    printReport(option, formValue);
  };

  const handleEmailModalState = () => {
    setEmailModal(true);
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    Swal.fire("Borrar formulario", "Desea borrar los campos?", "question").then(
      (result) => {
        if (result.isConfirmed) reset();
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <>
        <Field
          label="Nombre del paciente"
          placeholder="Altamar Rocha, Johan"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
        <Field
          label="Identificación"
          placeholder="1140859656"
          name="id"
          value={id}
          onChange={handleInputChange}
          required
        />
        <Field
          label="Edad"
          placeholder="42"
          name="age"
          value={age}
          onChange={handleInputChange}
          type="number"
          required
        />
        <Field
          label="Telefono"
          placeholder="3016902545"
          name="telephone"
          value={telephone}
          onChange={handleInputChange}
          required
        />
        {departments && (
          <Field
            label="Departamento"
            name="department"
            select
            value={department}
            onChange={handleInputChange}
          >
            {departments.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.departamento}
              </MenuItem>
            ))}
          </Field>
        )}

        {departments && (
          <Field
            label="Ciudad"
            name="city"
            select
            value={city}
            onChange={handleInputChange}
          >
            {departments[department].ciudades.map((item, id) => (
              <MenuItem key={id} value={item}>
                {item}
              </MenuItem>
            ))}
          </Field>
        )}
      </>

      {caseField && (
        <Field
          label="Caso #"
          name="caso"
          select
          value={caso}
          onChange={handleInputChange}
        >
          {[1, 2, 3, 4, 5].map((item, id) => (
            <MenuItem key={id} value={item}>
              {item}
            </MenuItem>
          ))}
        </Field>
      )}

      {option === "seguimiento" && (
        <>
          <FormControl component="fieldset">
            <FormLabel component="legend">Tiene prueba?</FormLabel>
            <RadioGroup name="test" value={test} onChange={handleInputChange}>
              <FormControlLabel value="si" control={<Radio />} label="Sí" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Tipo de prueba</FormLabel>
            <RadioGroup
              name="testType"
              value={testType}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="antigenica"
                control={<Radio />}
                label="Antigenica"
              />
              <FormControlLabel value="PCR" control={<Radio />} label="PCR" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Prueba cargada?</FormLabel>
            <RadioGroup
              name="testLoaded"
              value={testLoaded}
              onChange={handleInputChange}
            >
              <FormControlLabel value="si" control={<Radio />} label="Sí" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Resultado Prueba</FormLabel>
            <RadioGroup
              name="testResult"
              value={testResult}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="positivo"
                control={<Radio />}
                label="Positivo"
              />
              <FormControlLabel
                value="negativo"
                control={<Radio />}
                label="Negativo"
              />
            </RadioGroup>
          </FormControl>
        </>
      )}

      {option === "nuevo" && (
        <>
          <Field
            placeholder="Cra 25 # 25 - 25"
            label="Dirección"
            value={address}
            name="address"
            onChange={handleInputChange}
          />

          <Field
            placeholder="Cedritos"
            label="Barrio"
            value={barrio}
            name="barrio"
            onChange={handleInputChange}
          />

          <Field
            placeholder="Médico"
            label="Ocupación"
            value={ocupation}
            name="ocupation"
            onChange={handleInputChange}
          />

          <Field
            placeholder="2"
            label="Prioridad"
            value={priority}
            name="priority"
            onChange={handleInputChange}
          />

          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Toma de prueba</FormLabel>
            <RadioGroup
              name="testPlace"
              value={testPlace}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="presencial"
                control={<Radio />}
                label="Presencial"
              />
              <FormControlLabel
                value="domiciliaria"
                control={<Radio />}
                label="Domiciliaria"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Tipo de prueba</FormLabel>
            <RadioGroup
              name="testType"
              value={testType}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="antigenica"
                control={<Radio />}
                label="Antigenica"
              />
              <FormControlLabel value="PCR" control={<Radio />} label="PCR" />
            </RadioGroup>
          </FormControl>

          <KeyboardDatePicker
            fullWidth
            autoOk
            disableFuture
            variant="inline"
            inputVariant="outlined"
            label="Inicio de síntomas"
            format="DD/MM/yyyy"
            value={startDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={(date) => handleDateChange("startDate", date)}
          />

          <KeyboardDatePicker
            fullWidth
            autoOk
            disablePast
            variant="inline"
            inputVariant="outlined"
            label="Día de toma de la prueba"
            format="DD/MM/yyyy"
            value={testDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={(date) => handleDateChange("testDate", date)}
          />

          <Field
            placeholder="cefalea, etc ..."
            label="Síntomas"
            value={symptoms}
            name="symptoms"
            onChange={handleInputChange}
          />

          <Field
            placeholder="hipertensión, etc ..."
            label="Factores de riesgo / nexos"
            value={risks}
            name="risks"
            multiline
            rowsMax={4}
            onChange={handleInputChange}
          />

          <KeyboardDatePicker
            autoOk
            disableFuture
            variant="inline"
            inputVariant="outlined"
            label="Último Contacto"
            format="DD/MM/yyyy"
            value={lastDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={(date) => handleDateChange("lastDate", date)}
          />

          <Field
            placeholder="correo electrónico, otros..."
            label="Información adicional"
            value={extras}
            name="extras"
            multiline
            rowsMax={4}
            onChange={handleInputChange}
          />
        </>
      )}

      {(option === "seguimiento" || option === "nuevo") && (
        <>
          <Field
            placeholder="nombre@example.com"
            label="Correo electronico"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </>
      )}

      {option === "reinfeccion" && (
        <>
          <FormControl component="fieldset">
            <FormLabel component="legend">Tipo de prueba</FormLabel>
            <RadioGroup
              name="testType"
              value={testType}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="antigenica"
                control={<Radio />}
                label="Antigenica"
              />
              <FormControlLabel value="PCR" control={<Radio />} label="PCR" />
            </RadioGroup>
          </FormControl>
          <Field
            label="Ficha #"
            placeholder="45466"
            name="ficha"
            value={ficha}
            onChange={handleInputChange}
            type="number"
          />
          <Field
            placeholder="correo electrónico, otros..."
            label="Información adicional"
            value={extras}
            name="extras"
            multiline
            rowsMax={4}
            onChange={handleInputChange}
          />
        </>
      )}

      {/* ! ULTIMO - BUTTONS CONTAINER */}
      <div className={classes.buttonsContainer}>
        <Button variant="contained" color="primary" size="medium" type="submit">
          Reporte
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleEmailModalState}
          disabled={!(from && appPassword)}
        >
          Correo
        </Button>
        <Button
          variant="outlined"
          size="medium"
          color="secondary"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default Form;
