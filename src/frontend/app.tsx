import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../shared/routes';
import GlobalStyle from './style/global';
import Middlewares from './components/middlewares/Middlewares';
import { BuitProvider, extendTheme, theme } from 'buit-ui';

const WUPHF = extendTheme(theme, {
  global: {
    body: {
      overflowX: 'hidden',
    },
  },
  colors: {
    purple: 'rgba(69,63,125,1)',
    lightPurple: 'rgba(106,101,165,1)',
    orange: '#f95f10',
  },
});

const App = () => {
  return (
    <BuitProvider theme={WUPHF}>
      <GlobalStyle />
      <Middlewares />
      <Switch>
        {routes.map(({ ...route }, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    </BuitProvider>
  );
};

export default App;
