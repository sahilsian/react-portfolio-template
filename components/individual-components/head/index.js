import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'

const SiteHead = () => {
    return (
        <Head>
            <title>{config.head.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}

export default SiteHead