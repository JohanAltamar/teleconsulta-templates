import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AppContext } from '../../context/AppContext';
import DropZone from '../Uploads/DropZone'
import sendMail from '../../helpers/sendMail';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import templates from '../../utils/emailTemplates.json';

const EmailModal = ({ open, handleClose }) => {
  const history = useHistory();
  const [files, setFiles] = useState([])

  const { formValue, handleInputChange, resetSomeFields, option, updateSomeFields } = useContext(AppContext);
  const { email, message, subject, from, appPassword } = formValue;

  const handleSendMessage = async () => {
    try {
      const mailInfo = {
        to: email,
        from,
        password: appPassword,
        subject,
        text: message
      }
      const data = await sendMail(files, mailInfo)

      if (data) {
        setFiles([]);
        resetSomeFields("subject", "message")
        handleClose();
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        if (data?.code === "EAUTH") {
          Swal.fire("Error", "Credenciales de CORREO erróneas, ingresalas nuevamente", "error").then(() => {
            history.push("/login")
          })
        }
      }
      else {
        Swal.fire("Error", error.message, "error")
      }
    }
  }

  const handleEnter = () => {
    if (option === "no contesta") {
      updateSomeFields({ name: "subject", value: "CITA INASISTIDA" }, {
        name: "message", value: templates['cita inasistida']})
    }
    else {
      resetSomeFields("subject", "message")
    }
  }

  return (
    <Dialog open={open} onEnter={handleEnter} onClose={() => handleClose()} maxWidth="sm" >
      <DialogTitle id="form-dialog-title">Correo Electrónico</DialogTitle>
      <DialogContent dividers>
        <TextField
          fullWidth
          label="Asunto"
          margin="normal"
          name="subject"
          onChange={handleInputChange}
          value={subject}
          placeholder="Asunto"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Email Address"
          margin="normal"
          name="email"
          onChange={handleInputChange}
          type="email"
          value={email}
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          multiline
          name="message"
          onChange={handleInputChange}
          placeholder="Escriba el mensaje aquí..."
          rows={6}
          rowsMax={6}
          variant="outlined"
          value={message}
        />
        <DropZone files={files} setFiles={setFiles}>
        </DropZone>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
          </Button>
        <Button onClick={handleSendMessage} color="primary" disabled={!files.length && option !== "no contesta"} variant="outlined">
          Enviar
          </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EmailModal
