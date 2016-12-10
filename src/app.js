import {render} from "react-dom";
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TopContainer from "./containers/top";

import "normalize.css";
import "material-design-icons";

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <TopContainer />
  </MuiThemeProvider>
);

render(
  <App />,
  document.getElementById("app")
);
