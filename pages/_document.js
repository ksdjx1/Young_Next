import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
      const {html, head} = renderPage();
      const styles = flush();
  
      return { html, head, styles };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    <meta name="description" content="YeongJin's Home Page"/>
                    <meta name="keywords" content="YeongJin, nextjs, static, website" />
                    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding|Permanent+Marker|Maven+Pro:400&display=swap" rel="stylesheet"></link>
                    <style global jsx>
                        {`
                            html, body, #__next {
                                height: 100%;
                                width: 100%;
                                overflow: hidden;
                                margin: 0px;
                            }
                        `}
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}