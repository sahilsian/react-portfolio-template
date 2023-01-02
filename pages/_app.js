import './global.css'
import React, {useState, useEffect} from 'react'
import Loading from '../components/individual-components/loading';
export default function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);

    }, [])

    if (!mounted) {
        return null;
    }
    console.log('Built by Sahil Sian. https://cssahil.com')
    return <Component {...pageProps} />
  }