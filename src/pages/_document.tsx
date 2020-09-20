import Document, { Html, Head, Main, NextScript } from 'next/document'
import { theme, addServerStyleSheetsToDocumentInitialProps } from '@theme/index'

class MyDocument extends Document {

  static getInitialProps(ctx) {
    return addServerStyleSheetsToDocumentInitialProps(ctx, Document)
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument