import Document, { Html, Head, Main, NextScript } from 'next/document';

class NextDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* font inter */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#28525e"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextDocument;
