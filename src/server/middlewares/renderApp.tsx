import { RequestHandler } from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { StyleSheetManager, ServerStyleSheet } from 'styled-components';

import getManifest from './getManifest';
import App from '../../frontend/app';

const setResponse = (html: string, js: string, styles: string) => {
  return `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>WUPHF.com | wherever, whenever</title>
              ${styles}
          </head>
          <body>
              <div id="root">${html}</div>
              
              <script src="/build${js}"></script>
          </body>
          </html>`;
};

const renderApp = (): RequestHandler => {
  return async (req, res) => {
    const js = getManifest('app.js');

    const sheet = new ServerStyleSheet();

    const html = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
      </StyleSheetManager>
    );

    const styles = sheet.getStyleTags();
    sheet.seal();

    res.send(setResponse(html, js, styles));
  };
};

export default renderApp;
