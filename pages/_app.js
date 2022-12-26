import './global.css'

export default function MyApp({ Component, pageProps }) {
    console.log('Built by Sahil Sian. https://cssahil.com')
    return <Component {...pageProps} />
  }