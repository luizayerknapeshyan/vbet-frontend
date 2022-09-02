import { useState, useEffect } from "react";
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

  useEffect(() => {

  }, []);

  const searchRequestHandler = (skin, language, section, level, startDate, endDate, count) => {
    fetch(`http://127.0.0.1:4563/get-data?level=${level}&language=${language}&schema=${section}&skin=${skin}&limit=${count}&end_date=${endDate}&start_date=${startDate}`, {
      method: "GET",
      mode: 'cors',
  })
      .then(response => response.json()).then(responseJson => setData(responseJson.data));
  };

  return (
    <>
      <Searchbar onSearch={searchRequestHandler} />
      {data && <DataTable data={data} />}
    </>
  );
};

export default App;
