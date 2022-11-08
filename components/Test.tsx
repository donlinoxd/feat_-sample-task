import { Text } from '@chakra-ui/react'

interface Props {
    /** defines the text that renders inside the component */
    text: string
}

/** serves as a test for Storybook, Next, ChakraUI, React */
export default function Test({ text }: Props) {
    return <Text>{text}</Text>
}
