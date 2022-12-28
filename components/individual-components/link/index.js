import React from 'react'
import config from '../../../config.json'
import styled from 'styled-components'
import Link from 'next/link'
import TextLabel from '../text-label'

const AppLink = ({href, text}) => {
    return (
        <Link
            href={{
                pathname: href
            }}
            style={{
                textDecoration: 'none',
                cursor: 'pointer'
            }}
        >
            <TextLabel
                text={text}
                color={config.navigation.colors.accent}
                hover={config.navigation.colors.accent + "80"}
            >
            </TextLabel>
        </Link>
    )
}

export default AppLink