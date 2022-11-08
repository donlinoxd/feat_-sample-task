import { Stack } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import FullScreen from 'components/FullScreen'
import Test from 'components/Test'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Test',
    component: Test,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Test>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Test> = (args) => (
    <FullScreen>
        <Stack width={{ base: '50%', md: '25%' }}>
            <Test {...args} />
        </Stack>
    </FullScreen>
)

export const First = Template.bind({})
First.args = {
    text: 'test text',
}
