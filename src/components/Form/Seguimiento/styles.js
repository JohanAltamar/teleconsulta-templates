import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
