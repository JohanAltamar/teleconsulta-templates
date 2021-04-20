import React from "react";
import { RadioGroup, FormControl, FormLabel } from "@material-ui/core";

import useStyles from "./useStyles";
import RadioButton from "./RadioButton";
import cases from "../../utils/cases";
import { AppContext } from "../../context/AppContext";

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const { option, setOption } = React.useContext(AppContext);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <FormControl component="fieldset" margin="normal" fullWidth>
      <FormLabel component="legend">Caso</FormLabel>
      <RadioGroup
        name="casos"
        value={option}
        onChange={handleChange}
        className={classes.radioGroup}
      >
        {cases.map(({ label, value }, idx) => (
          <RadioButton key={idx} label={label} value={value} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
