import { AppBar, Button, Toolbar, Typography } from "@material-ui/core"
import { Email, ExitToApp } from "@material-ui/icons"
import { useContext } from "react"
import EmailModal from "../components/Modals/EmailModal"
import { AppContext } from "../context/AppContext"
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router"
import HcModal from "../components/Modals/HcModal"

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

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const { emailModal, setEmailModal, formValue, hcModal, setHcModal } = useContext(AppContext)
  const { from, appPassword } = formValue;

  const closeEmailModal = () => {
    setEmailModal(false)
  }

  const closeHcModal = () => {
    setHcModal(false)
  }

  const logged = from && appPassword;

  return (
    <>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            Teleorientación Ágil
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

      <EmailModal open={emailModal} handleClose={closeEmailModal} />
      <HcModal open={hcModal} handleClose={closeHcModal} />

      {
        children
      }
    </>
  )
}

export default Layout
