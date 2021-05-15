import { AppBar, Button, Toolbar, Typography } from "@material-ui/core"
import { CloudDownload, Email, ExitToApp } from "@material-ui/icons"
import EmailModal from "../components/Modals/EmailModal"
import { useAppContext } from "../context/AppContext"
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router"
import HcModal from "../components/Modals/HcModal"
import CallsModal from "./Modals/CallsModal"
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
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
  const { emailModal, setEmailModal, formValue, hcModal, setHcModal, callsModal, setCallsModal } = useAppContext()
  const { from, appPassword, username } = formValue;

  const closeEmailModal = () => {
    setEmailModal(false)
  }

  const closeHcModal = () => {
    setHcModal(false)
  }

  const logged = from && appPassword;

  const handleDownloadReport = () => {
    console.log("download")
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/api/calls/report?creadoPor=${username}`,
      responseType: 'blob',
    })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `report-${username}`);
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            Teleorientación Ágil
          </Typography>
          <Button
            className={classes.button}
            color="inherit"
            onClick={handleDownloadReport}
            startIcon={<CloudDownload />}
          >
            Reporte
          </Button>
          <Button
            className={classes.button}
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
      <CallsModal open={callsModal} handleClose={() => setCallsModal(false)} />

      {
        children
      }
    </>
  )
}

export default Layout
