import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Form = (props) => {
  return (
    <>
      <FormControl>
        <InputLabel id="skin">Skin</InputLabel>
        <Select
          labelId="skin"
          id="skin"
          sx={{ width: "7.5rem" }}
          label="Skin"
          value={props.skin}
          onChange={props.onSkinChange}
        >
          <MenuItem value={"vbet.com"}>vbet.com</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="language">Language</InputLabel>
        <Select
          labelId="language"
          id="language"
          sx={{ width: "7.5rem" }}
          label="Language"
          value={props.language}
          onChange={props.onLanguageChange}
        >
          <MenuItem value={"arm"}>arm</MenuItem>
          <MenuItem value={"eng"}>eng</MenuItem>
          <MenuItem value={"rus"}>rus</MenuItem>
          <MenuItem value={"fra"}>fra</MenuItem>
          <MenuItem value={"ger"}>ger</MenuItem>
          <MenuItem value={"geo"}>geo</MenuItem>
          <MenuItem value={"arb"}>arb</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="section">Section</InputLabel>
        <Select
          labelId="section"
          id="section"
          sx={{ width: "7.5rem" }}
          label="Section"
          value={props.section}
          onChange={props.onSectionChange}
        >
          <MenuItem value={"0"}>0</MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="level">Level</InputLabel>
        <Select
          labelId="level"
          id="level"
          sx={{ width: "7.5rem" }}
          label="Level"
          value={props.level}
          onChange={props.onLevelChange}
        >
          <MenuItem value={"sport"}>sport</MenuItem>
          <MenuItem value={"region"}>region</MenuItem>
          <MenuItem value={"competition"}>competition</MenuItem>
          <MenuItem value={"market"}>market</MenuItem>
          <MenuItem value={"event"}>event</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Form;
