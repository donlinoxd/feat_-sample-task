import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
    sm: '30em',
    md: '50em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
}

const config = { initialColorMode: 'light', useSystemColorMode: false }

export default extendTheme({
    breakpoints,
    config,
    fonts: {
        heading: 'Plus+Jakarta+Sans',
        body: 'Plus+Jakarta+Sans',
    },
    styles: {
        global: {
            'div:not(#dropin-container *)': {
                margin: '0 !important',
            },
            h1: {
                fontSize: '3xl',
                fontWeight: 600,
            },
            span: {
                margin: '0px !important',
            },
            ol: {
                marginLeft: '30px',
            },
            ul: {
                marginLeft: '30px',
            },
        },
    },
    colors: {},
})
