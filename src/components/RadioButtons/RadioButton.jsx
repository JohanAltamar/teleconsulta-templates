import { FormControlLabel, Radio } from "@material-ui/core";

const RadioButton = ({ value, label }) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={label}
      labelPlacement="bottom"
    />
  );
};

export default RadioButton;
