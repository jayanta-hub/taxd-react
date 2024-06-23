import { MantineProvider, createTheme } from "@mantine/core";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";

const theme = createTheme({
  colors: {
    white: [
      "#FFFFFF",
      "#F9FAFB",
      "#F3F4F6",
      "#E5E7EB",
      "#D1D5DB",
      "#9CA3AF",
      "#6B7280",
      "#4B5563",
      "#374151",
      "#1F2937",
      "#111827",
      "#0F172A",
    ],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <MantineProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
