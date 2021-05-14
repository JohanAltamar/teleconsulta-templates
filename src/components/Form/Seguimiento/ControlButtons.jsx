import { Button } from "@material-ui/core";
import Swal from "sweetalert2";
import { useAppContext } from "../../../context/AppContext";
import { useStyles } from "./styles";

const ControlButtons = () => {
  const classes = useStyles();
  const { formValue, reset, setEmailModal, setHcModal } = useAppContext();

  const handleShowHistoriaClinica = () => {
    setHcModal(true);
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
    <div className={classes.buttonsContainer}>
      <Button variant="contained" color="primary" size="medium" type="submit">
        Reporte
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        onClick={handleShowHistoriaClinica}
      >
        Historia
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleEmailModalState}
        disabled={!(formValue.from && formValue.appPassword)}
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
  );
};

export default ControlButtons;
