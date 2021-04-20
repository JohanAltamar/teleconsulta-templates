import { useContext } from "react";
import { Typography } from "@material-ui/core";
import { AppContext } from "../../context/AppContext";
import Form from ".";

const Displayer = () => {
  const { option } = useContext(AppContext);

  return (
    <>
      <Typography align="center" variant="h5">
        Datos del paciente - {option}
      </Typography>
      {option === "no contesta" && <Form option={option} />}
      {option === "doble agenda" && <Form option={option} />}
      {option === "no covid" && <Form option={option} />}
      {option === "nuevo" && <Form option={option} caseField />}
      {option === "seguimiento" && <Form option={option} caseField />}
      {option === "alta covid" && <Form option={option} caseField />}
      {option === "urgente" && <Form option={option} />}
      {option === "reinfeccion" && <Form option={option} />}
    </>
  );
};

export default Displayer;
