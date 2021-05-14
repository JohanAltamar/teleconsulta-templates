import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import { useAppContext } from "../../../context/AppContext";

const RadioButtonsGroup = ({ label, name, options = [] }) => {
  const { formValue, handleInputChange } = useAppContext();
  
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        name={name}
        value={formValue[name]}
        onChange={handleInputChange}
      >
        {options.map(({ _label, _value }, idx) => (
          <FormControlLabel
            key={idx}
            control={<Radio />}
            value={_value}
            label={_label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;