import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "../shared/routes";
import GlobalStyle from "./style/global";
import Middlewares from "./components/middlewares/Middlewares";
import { QuaantumProvider, extendTheme, theme } from "quaantum-components";

const WUPHF = extendTheme(theme, {
  global: {
    body: {
      overflowX: "hidden",
    },
  },
  colors: {
    purple: "rgba(69,63,125,1)",
    lightPurple: "rgba(106,101,165,1)",
    orange: "#f95f10",
  },
});

const App = () => {
  return (
    <QuaantumProvider theme={WUPHF}>
      <GlobalStyle />
      <Middlewares />
      <Switch>
        {routes.map(({ ...route }, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    </QuaantumProvider>
  );
};

export default App;
