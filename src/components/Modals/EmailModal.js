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

const EmailModal = ({ open, handleClose }) => {
  const [files, setFiles] = useState([])

  const { formValue, handleInputChange, resetSomeFields } = useContext(AppContext);
  const { email, message = "Buen día \nadjunto le envío", subject = "" } = formValue;

  const handleSendMessage = async () => {
    const mailInfo = {
      to: email,
      from: "TELECONSULTA@gmail.com",
      subject,
      text: message
    }
    const data = await sendMail(files, mailInfo)
    if (data) {
      setFiles([]);
      resetSomeFields("subject", "message")
      handleClose();
    }
  }

  return (
    <Dialog open={open} onClose={() => handleClose()} maxWidth="sm" >
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
        <Button onClick={handleSendMessage} color="primary" disabled={!files.length} variant="outlined">
          Enviar
          </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EmailModal
