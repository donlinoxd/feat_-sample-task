import { Stack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export default function FullScreen({ children }: PropsWithChildren) {
    return (
        <Stack width='100%' height='100%' minH='100vh' justifyContent='center' alignItems='center'>
            {children}
        </Stack>
    )
}
