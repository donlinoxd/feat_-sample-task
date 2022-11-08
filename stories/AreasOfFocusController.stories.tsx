import { Stack } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AreasOfFocusController from 'components/AreasOfFocusController'
import FullScreen from 'components/FullScreen'

export default {
    title: 'Components/AreasOfFocusController',
    component: AreasOfFocusController,
    argTypes: {},
} as ComponentMeta<typeof AreasOfFocusController>

const Template: ComponentStory<typeof AreasOfFocusController> = (args) => (
    <FullScreen>
        <Stack width={{ base: '90%', md: '50%' }}>
            <AreasOfFocusController {...args} />
        </Stack>
    </FullScreen>
)

export const First = Template.bind({})
First.args = {
    all_areas_of_focus: [
        {
            id: 'depression',
            text: 'Depression',
            primary_color: '#C2410C',
            secondary_color: '#FFEDD5',
        },
        {
            id: 'stress',
            text: 'Stress',
            primary_color: '#6D28D9',
            secondary_color: '#EDE9FE',
        },
        {
            id: 'anxiety',
            text: 'Anxiety',
            primary_color: '#C2410C',
            secondary_color: '#FFEDD5',
        },
        {
            id: 'addictions',
            text: 'Addictions',
            primary_color: '#6D28D9',
            secondary_color: '#EDE9FE',
        },
        {
            id: 'lgbt',
            text: 'The LGBT Community',
            primary_color: '#C2410C',
            secondary_color: '#FFEDD5',
        },
        {
            id: 'motivation',
            text: 'Motivation, Self-Esteem, and Confidence',
            primary_color: '#6D28D9',
            secondary_color: '#EDE9FE',
        },
        {
            id: 'relationships',
            text: 'Relationships',
            primary_color: '#C2410C',
            secondary_color: '#FFEDD5',
        },
        {
            id: 'family',
            text: 'Family Conflicts',
            primary_color: '#6D28D9',
            secondary_color: '#EDE9FE',
        },
        {
            id: 'trauma',
            text: 'Trauma & Abuse',
            primary_color: '#C2410C',
            secondary_color: '#FFEDD5',
        },
        {
            id: 'grief',
            text: 'Grief & Loss',
            primary_color: '#6D28D9',
            secondary_color: '#EDE9FE',
        },
        {
            id: 'eating',
            text: 'Eating',
            primary_color: '#C2410C',
            secondary_color: '#FFEDD5',
        },
        {
            id: 'sleeping',
            text: 'Sleeping',
            primary_color: '#6D28D9',
            secondary_color: '#EDE9FE',
        },
    ],
}
