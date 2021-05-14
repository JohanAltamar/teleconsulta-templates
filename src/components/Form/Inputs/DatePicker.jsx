import { KeyboardDatePicker } from "@material-ui/pickers";
import { useAppContext } from "../../../context/AppContext";

const DatePicker = ({ label, name, ...rest }) => {
  const { formValue, handleInputChange } = useAppContext();

  const handleDateChange = (name, date) => {
    handleInputChange({
      target: {
        name,
        value: date,
      },
    });
  };

  return (
    <KeyboardDatePicker
      fullWidth
      autoOk
      variant="inline"
      inputVariant="outlined"
      label={label}
      format="DD/MM/yyyy"
      value={formValue[name]}
      InputAdornmentProps={{ position: "start" }}
      onChange={(date) => handleDateChange(name, date)}
      {...rest}
    />
  );
};

export default DatePicker;
