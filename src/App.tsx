import React from "react";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import Formbuilder from "./component/formBuilder/Formbuilder";
import { ILoginForm } from "./types/ILoginForm";
import "@mantine/core/styles.css";
import { surveyData } from "./utility/data";
import Survey from "./component/survey/Survey";

function App() {
  const data1 = surveyData?.data?.data?.categories?.Introduction?.questionFlow;
  return (
    <MantineProvider>
      <Survey />
    </MantineProvider>
  );
}

export default App;
