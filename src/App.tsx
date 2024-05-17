import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import Formbuilder from "./component/formBuilder/Formbuilder";
import { ILoginForm } from "./types/ILoginForm";
import "@mantine/core/styles.css";
import { surveyData } from "./utility/data";

function App() {
  const data1 = surveyData?.data?.data?.categories?.Introduction?.questionFlow;
  console.log("🚀 ~ App ~ data:", data1);
  const formProps: ILoginForm = {
    config: {
      data: [
        {
          content: {
            id: "email",
            label: "Emil",
            element: "input",
            name: "email",
            placeholder: "email",
            required: true,
          },
          style: {
            width: "200rem",
          },
          editable: false,
          display: "block",
          // validate: {
          //   pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          //   errMessage: "Invalid email",
          // },
        },
        {
          content: {
            id: "password",
            label: "Password",
            element: "input",
            name: "password",
            placeholder: "password",
            required: true,
          },
          editable: false,
          display: "block",
          // validate: {
          //   pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          //   errMessage: "Custom message",
          // },
        },
        {
          content: {
            id: "forgotusername",
            element: "linkText",
            name: "Forgot UserName",
          },
          style: {},
        },
        {
          content: {
            id: "forgotpassword",
            element: "linkText",
            name: "Forgot Password",
          },
          style: {},
        },
      ],
      useDefaultData: false,
    },
    // formName: "Login Form",

    style: {
      // bg: "yellow",
      // backgroundColor: "green",
      // borderRadius: 25,
      // maxWidth: 500
      // height: 400,
    },

    getForm: (e: any) => {
      console.log("getform", e.values);
    },
    onClick: (e: any) => {
      console.log("onClick", e);
    },
  };
  return (
    <MantineProvider>
      <Formbuilder {...formProps} />
    </MantineProvider>
  );
}

export default App;
