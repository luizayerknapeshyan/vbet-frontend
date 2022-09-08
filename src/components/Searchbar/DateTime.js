import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";

import classes from './DateTime.module.css';

const DateTime = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDateTimePicker
        value={props.startDate || null}
        label="Start Time"
        onChange={props.onStartDateChange}
        renderInput={(params) => <TextField {...params} />}
        className={classes.date}
        ampm={false}
        disableFuture={true}
      />
      <DesktopDateTimePicker
        value={props.endDate || null}
        label="End Time"
        onChange={props.onEndDateChange}
        renderInput={(params) => <TextField {...params} />}
        className={classes.date}
        ampm={false}
        disableFuture={true}
      />
    </LocalizationProvider>
  );
};

export default DateTime;