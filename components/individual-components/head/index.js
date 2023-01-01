import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import config from '../../../config.json'

const SiteHead = ({title, description, banner}) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="/greenclick-green.png" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta content={title} property="og:title" />
            <meta content={description} property="og:description" />
            <meta content={window.location.href} property="og:url" />
            <meta content={banner} property="og:image" />
            <meta name="description" content={description}></meta>
            <meta name="robots" content="index, follow" />
            <meta content={config.navigation.colors.accent} data-react-helmet="true" name="theme-color" />
        </Head>
    )
}

SiteHead.defaultProps = {
    title: config.metadata.site_title,
    description: config.metadata.site_description,
    banner: config.metadata.site_image
}

export default SiteHead