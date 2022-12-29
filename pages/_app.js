import './global.css'
import React, {useState, useEffect} from 'react'
import Loading from '../components/individual-components/loading';
export default function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setTimeout(()=> {
            setMounted(true);
        }, 3000)
    }, [])

    if (!mounted) {
        return <Loading />;
    }
    console.log('Built by Sahil Sian. https://cssahil.com')
    return <Component {...pageProps} />
  }