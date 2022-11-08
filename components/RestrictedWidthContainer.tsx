import { Stack, StackProps } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

/**
 * component that restricts the width of its children
 */
export default function RestictedWidthContainer({ children, ...props }: PropsWithChildren<StackProps>) {
    return (
        <Stack width='100%' alignItems='center'>
            <Stack width={{ base: '96%', md: '92%', lg: '88%', xl: '84%', '2xl': '1400px' }} {...props} height='100%'>
                {children}
            </Stack>
        </Stack>
    )
}
