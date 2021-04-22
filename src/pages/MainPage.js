import { AppBar, Button, Toolbar, Typography } from "@material-ui/core"
import { Email, ExitToApp } from "@material-ui/icons"
import { useContext } from "react"
import Displayer from "../components/Form/Displayer"
import EmailModal from "../components/Modals/EmailModal"
import RadioButtonsGroup from "../components/RadioButtons"
import { AppContext } from "../context/AppContext"
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { emailModal, setEmailModal, formValue } = useContext(AppContext)
  const { from, appPassword } = formValue;

  const closeEmailModal = () => {
    setEmailModal(false)
  }

  const logged = from && appPassword;

  return (
    <>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            Teleorientación SURA
          </Typography>

          <Button
            color="inherit"
            onClick={() => history.push("/login")}
            startIcon={logged ? <ExitToApp /> : <Email />}
          >
            {logged ? "salir" : "entrar"}
          </Button>
        </Toolbar>
      </AppBar>
      <RadioButtonsGroup />
      <Displayer />
      <EmailModal open={emailModal} handleClose={closeEmailModal} />
    </>
  )
}

export default MainPage
