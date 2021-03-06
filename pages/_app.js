import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
	<meta charset='utf-8' />
	<meta http-equiv='X-UA-Compatible' content='IE=edge' />

	<link rel="manifest" href="/manifest.json" />
	<link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
	<link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
	<link rel="apple-touch-icon" href="/apple-icon.png"></link>
	<meta name="theme-color" content="#317EFB"/>
        <title>Sabrina Critzmann</title>
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0;" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
