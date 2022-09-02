import { useState } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import DataTable from "./components/Table/DataTable";

const DUMMY_DATA = {
  data: [
    {
      date: "Tue, 23 Aug 2022 19:49:23 GMT",
      level: "game",
      name: "ՖԱ Կոնտու (Մ20) <--> HJK Helsinki II U20",
      path: '["Ֆուտբոլ", "Ֆինլանդիա", "Լիգա (Մ20)"]',
      url: "https://www.vbet.com/#/sport/?type=1&lang=arm&sport=1&region=820001&competition=15354&game=20454843",
    },
    {
      date: "Tue, 23 Aug 2022 19:49:23 GMT",
      level: "game",
      name: "ՖԱ Կոնտու (Մ21) <--> HJK Helsinki II U20",
      path: '["Ֆուտբոլ", "Ֆինլանդիա", "Լիգա (Մ20)"]',
      url: "https://www.vbet.com/#/sport/?type=1&lang=arm&sport=1&region=820001&competition=15354&game=20454843",
    },
  ],
};


const App = () => {

  const [data, setData] = useState([])
  
  const searchRequestHandler = (skin, language, section, level, startDate, endDate, count) => {
    // fetch("https://google.com")
    //   .then((response) => response)
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    // data = DUMMY_DATA.data; 
    setData(DUMMY_DATA.data)
    console.log(data)
  };

  return (
    <>
      <Searchbar onSearch={searchRequestHandler} />
      {data && <DataTable data={data} />}
    </>
  );
};

export default App;
