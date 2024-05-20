import React, { useEffect } from "react";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { surveyData } from "./utility/surveyData";
import Surveycopy from "./component/survey/Surveycopy";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./component/Home/Home";

function App() {
  const data1 = surveyData?.data?.data?.categories?.Introduction?.questionFlow;

  return (
    <MantineProvider>
      {/* <Survey /> */}
      <Provider store={store}>
        <Home />
      </Provider>
    </MantineProvider>
  );
}

export default App;
