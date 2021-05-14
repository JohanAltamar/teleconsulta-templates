import { useLocation } from 'react-router';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { useAppContext } from '../../context/AppContext';
import templates from '../../utils/hcTemplates.json';
import Swal from 'sweetalert2';
import getHcTemplate from '../../utils/getHcTemplate';

const HcModal = ({ open, handleClose }) => {
  const { pathname } = useLocation();

  const { formValue, handleInputChange, resetSomeFields, option, updateSomeFields } = useAppContext();

  const { hcMessage, caso } = formValue;

  const handleBuildSeguimientoHistory = () => {

    updateSomeFields({ name: "hcMessage", value: getHcTemplate(undefined, formValue, inSeguimientoPage) })
  };

  const handleEnter = () => {
    if (!hcMessage) {
      if (option === "no contesta") {
        updateSomeFields({ name: "hcMessage", value: templates["no contesta"] })
      } else if (option === "nuevo") {
        updateSomeFields({ name: "hcMessage", value: getHcTemplate(option, formValue) })
      } else if (option === "reinfeccion") {
        updateSomeFields({ name: "hcMessage", value: getHcTemplate(option, formValue) })

      }
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(hcMessage);
    Swal.fire({
      titleText: "Éxito",
      icon: "success",
      text: "Resumen de Historia Clínica copiado al portapapeles",
      timer: 1500,
      timerProgressBar: true,
    })
    resetSomeFields("hcMessage")
    handleClose();
  }

  const handleExit = () => {
    Swal.fire({
      icon: "warning",
      titleText: "Desea salir sin copiar?",
      text: "Los cambios realizados se perderán",
      confirmButtonText: "Salir sin copiar",
      cancelButtonText: "Quedarme :)",
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        resetSomeFields("hcMessage");
        handleClose();
      }
    })
  }

  const handleBackdropClick = () => {
    handleExit()
  }

  const inSeguimientoPage = pathname.match(/seguimiento/i) ? true : false;

  return (
    <Dialog
      fullWidth maxWidth="lg"
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onEnter={inSeguimientoPage ? handleBuildSeguimientoHistory : handleEnter}
      onBackdropClick={handleBackdropClick}
      onEscapeKeyDown={handleBackdropClick}
      onClose={() => handleClose()}
    >
      <DialogTitle id="form-dialog-title">Historia Clínica - {inSeguimientoPage ? "Seguimiento" : "Caso " + caso}</DialogTitle>
      <DialogContent dividers>
        <TextField
          fullWidth
          margin="normal"
          multiline
          name="hcMessage"
          onChange={handleInputChange}
          placeholder="Escriba el mensaje aquí..."
          rows={15}
          rowsMax={15}
          variant="outlined"
          value={hcMessage}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleExit} color="secondary">
          Cancelar
          </Button>
        <Button onClick={handleCopy} color="primary" variant="outlined">
          Copiar
          </Button>
      </DialogActions>
    </Dialog>
  );
}

export default HcModal
