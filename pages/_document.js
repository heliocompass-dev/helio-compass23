import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Open Graph */}
          <meta property="og:title" content="地球暦 HELIO COMPASS Official Website" />
          <meta property="og:description" content="太陽系時空間地図 地球暦 / HELIO COMPASS は、太陽を中心とした地球の一年の動きを見ることができる暦です。" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://heliostera.com/" />
          <meta property="og:image" content="https://heliostera.com/sns-thumbnail.jpg" />
          <meta property="og:image:width" content="1366" />
          <meta property="og:image:height" content="1040" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="地球暦 HELIO COMPASS Official Website" />
          <meta name="twitter:description" content="太陽系時空間地図 地球暦 / HELIO COMPASS は、太陽を中心とした地球の一年の動きを見ることができる暦です。" />
          <meta name="twitter:url" content="https://heliostera.com/" />
          <meta name="twitter:image" content="https://heliostera.com/sns-thumbnail.jpg" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
