import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, MenuItem } from '@material-ui/core';
import Swal from 'sweetalert2';
import { useAppContext } from '../../context/AppContext';
import Field from '../Form/Inputs/Field';

const useStyles = makeStyles(theme => ({
  content: {
    "& > *": {
      marginBottom: theme.spacing(3),
      "&:last-child": {
        marginBottom: 0,
      },
    }
  },
}))

const CallsModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const { formValue } = useAppContext();
  const { name: nombre, id: cedula, telephone: telefono, callType: tipo, username: creadoPor } = formValue;

  const handleRegisterCall = () => {
    const data = { nombre, cedula, telefono, tipo, creadoPor };

    Swal.fire({
      title: 'Desea registrar la llamada con los siguientes datos?',
      icon: "warning",
      html: `
      <div align="center">
        Nombre:  ${nombre} <br/>
        Celular: ${telefono} <br/>
        Cedula:  ${cedula} <br/>
        Llamada: ${tipo} <br/>
        Doctor: ${creadoPor} <br/>
      </div>`,
      showCancelButton: true,
      cancelButtonText: "Volver",
      confirmButtonText: 'Registrar Llamada',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(`${process.env.REACT_APP_API_URL}/api/calls/new`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Lllamada registrada con éxito",
            icon: "success",
            timer: 1000
          })
          handleClose();
        }
      })
  }

  return (
    <Dialog
      fullWidth maxWidth="xs"
      open={open}
      onClose={() => handleClose()}
    >
      <DialogTitle id="form-dialog-title">Registrar Llamada</DialogTitle>
      <DialogContent className={classes.content} dividers>
        <Field name="name" label="Nombre del paciente" />
        <Field name="telephone" label="Numero del paciente" />
        <Field name="id" label="Cedula del paciente" />
        <Field name="callType" label="Tipo de registro" select>
          <MenuItem value="alta no contactado">alta no contactado</MenuItem>
          <MenuItem value="efectivo">efectivo</MenuItem>
          <MenuItem value="no efectivo">no efectivo</MenuItem>
        </Field>
        <Field name="username" label="Nombre Doctor" select>
          <MenuItem value="luz">Luz</MenuItem>
          <MenuItem value="paula">Paula</MenuItem>
        </Field>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => handleClose()}>
          Cancelar
          </Button>
        <Button color="primary" variant="outlined" onClick={handleRegisterCall}>
          Registrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CallsModal
