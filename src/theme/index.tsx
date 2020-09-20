import React, { useEffect } from 'react'
import { createMuiTheme, ServerStyleSheets, ThemeProvider as Provider } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#880e4f',
    },
    secondary: {
      main: '#ad1457',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    }
  }
});

export const useEnsureServerSideInjectCSS = () =>
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);


export const ThemeProvider:  React.FunctionComponent<any> = (props) => {
  useEnsureServerSideInjectCSS()

  return (
    <Provider theme={theme}>
      <CssBaseline />
      {props.children}
    </Provider>
  )
}


export const addServerStyleSheetsToDocumentInitialProps = async (ctx, Document) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () => originalRenderPage({ enhanceApp: (App) => (props) => sheets.collect(<App {...props} />) })
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

export const withThemeProvider = fnComponent => () => (<ThemeProvider>{fnComponent()}</ThemeProvider>)
