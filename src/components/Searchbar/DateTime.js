import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DateTime = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        value={props.startDate || null}
        label="Start Time"
        onChange={props.onStartDateChange}
        renderInput={(params) => <TextField {...params} />}
        sx={{ borderColor: 'black' }}
      />
      <DateTimePicker
        value={props.endDate || null}
        label="End Time"
        onChange={props.onEndDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateTime;