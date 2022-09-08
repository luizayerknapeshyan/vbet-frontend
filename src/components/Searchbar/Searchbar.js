import { useState } from "react";

import Form from "./Form";
import DateTime from "./DateTime";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";

let enableButton = false;

const Searchbar = (props) => {
  const [skin, setSkin] = useState("");
  const [language, setLanguage] = useState("");
  const [section, setSection] = useState("");
  const [level, setLevel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [count, setCount] = useState("");

  const skinChangeHandler = (event) => {
    setSkin(event.target.value);
  };

  const languageChangeHandler = (event) => {
    setLanguage(event.target.value);
  };

  const sectionChangeHandler = (event) => {
    setSection(event.target.value);
  };

  const levelChangeHandler = (event) => {
    setLevel(event.target.value);
  };

  const startDateChangeHandler = (newValue) => {
    setStartDate(newValue);
  };

  const endDateChangeHandler = (newValue) => {
    setEndDate(newValue);
  };

  const countChangeHandler = (event) => {
    setCount(event.target.value);
  };

  const resetHandler = () => {
    // setSkin("");
    // setLanguage("");
    // setSection("");
    setLevel("");
    setStartDate("");
    setEndDate("");
    setCount("");
  };

  if (skin !== "" && language !== "" && section !== "") {
    enableButton = true;
  }

  return (
    <Card sx={{ marginBottom: "3rem", width: "90rem" }}>
      <CardContent
        sx={{ display: "flex", justifyContent: "space-evenly" }}
        component={Paper}
      >
        <Form
          skin={skin}
          language={language}
          section={section}
          level={level}
          onSkinChange={skinChangeHandler}
          onLanguageChange={languageChangeHandler}
          onSectionChange={sectionChangeHandler}
          onLevelChange={levelChangeHandler}
        />
        <DateTime
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={startDateChangeHandler}
          onEndDateChange={endDateChangeHandler}
        />
        <TextField
          sx={{ width: "6rem" }}
          label="Number"
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          value={count}
          onChange={countChangeHandler}
        />
        <Button onClick={resetHandler}>Reset</Button>
        <Button
          disabled={!enableButton}
          onClick={() =>
            props.onSearch(
              skin,
              language,
              section,
              level,
              startDate,
              endDate,
              count
            )
          }
        >
          Search
        </Button>
      </CardContent>
    </Card>
  );
};

export default Searchbar;
