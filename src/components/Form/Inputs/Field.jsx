import { TextField } from "@material-ui/core";
import { useAppContext } from "../../../context/AppContext";

const Field = ({ children, name, ...rest }) => {
  const { formValue, handleInputChange } = useAppContext();
  
  return (
    <TextField
      variant="outlined"
      fullWidth
      name={name}
      value={formValue[name]}
      onChange={handleInputChange}
      {...rest}
    >
      {children}
    </TextField>
  );
};

export default Field;
