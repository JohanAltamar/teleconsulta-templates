import { Button, Container, Paper, TextField, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../context/AppContext";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    height: "90vh",
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
  },
}))

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const { formValue, handleInputChange, resetSomeFields } = useContext(AppContext);
  const { from, appPassword } = formValue;

  const handleLoginClick = () => {
    history.replace("/")
  }

  const handleNextClick = () => {
    resetSomeFields("from", "appPassword");
    history.replace("/")
  }

  return (
    <Container className={classes.container}>
      <Paper elevation={4} className={classes.paper}>
        <form>
          <Typography align="center" variant="h5" gutterBottom>
            Credenciales Email
          </Typography>
          <TextField
            fullWidth
            label="Email Teleorientación"
            margin="normal"
            name="from"
            onChange={handleInputChange}
            placeholder="teleorientacion.sura.xx@gmail.com"
            type="email"
            value={from}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Contraseña para aplicaciones"
            margin="normal"
            name="appPassword"
            onChange={handleInputChange}
            placeholder="16 dígitos"
            value={appPassword}
            variant="outlined"

          />
          <div className={classes.buttonsContainer}>
            <Button variant="contained" color="secondary" onClick={handleNextClick}>sin Correo</Button>
            <Button
              variant="contained"
              color="primary"
              disabled={!(from.length > 5 && appPassword.length === 16)}
              onClick={handleLoginClick}
            >Continuar</Button>
          </div>
        </form>
      </Paper>
    </Container>
  )
}

export default LoginPage
