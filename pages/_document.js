import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
      <link rel="icon" href="/favicons/android-chrome-192x192.png" />
      <link rel="icon" href="/favicons/android-chrome-256x256.png" />
      <link rel="icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" href="/favicons/favicon-16x16.png" />
      <link rel="icon" href="/favicons/favicon-32x32.png" />
      <link rel="icon" href="/favicons/favicon.ico" />
      <link rel="icon" href="/favicons/mstile-150x150.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
