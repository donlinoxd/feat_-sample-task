import { Circle, Flex, HStack, Text } from '@chakra-ui/react'
import { AreaOfFocusType } from 'lib/types'
import { useState } from 'react'
interface Props {
    /**
     * all of the areas of focus that will be rendered
     */
    all_areas_of_focus: AreaOfFocusType[]

    /**
     * ids of the areas of focus that are currently selected
     */
    selected_areas_of_focus_ids: string[]

    /**
     * callback that is called whenever an area of focus is selected
     */
    onSelect: (aof_id: string) => void

    /**
     * callback that is called whenever an area of focus is unselected
     */
    onDeselect: (aof_id: string) => void
}

/**
 * Component where Clients or Professionals can select their areas of focus
 * UI design: https://www.figma.com/file/f4PqVjtJnM8ECBHKQJrkgd/MeTimeVar1?node-id=1085%3A21205
 */
export default function AreasOfFocusSelector({
    all_areas_of_focus,
    selected_areas_of_focus_ids,
    onSelect,
    onDeselect,
}: Props) {
    const [select, setSelect] = useState(false)

    return (
        <>
            <Flex
                sx={{
                    flexWrap: 'wrap',
                    gap: {
                        base: '0.75rem 0.25rem',
                        sm: '1rem 0.5rem',
                        lg: '1.5rem 1rem',
                    },
                }}
            >
                {all_areas_of_focus.map((area) => (
                    <HStack
                        key={area.id}
                        sx={{
                            background: area.secondary_color,
                            padding: {
                                base: '0.25rem 0.75rem',
                                sm: '0.5rem 1.5rem',
                                xl: '0.6rem 1.75rem',
                            },
                            borderRadius: '999px',
                            gap: {
                                base: '0.1rem',
                                sm: '0.2rem',
                                lg: '0.35rem',
                            },
                        }}
                    >
                        <Circle
                            size={{ base: '12px', sm: '16px', lg: '20px' }}
                            border={{ base: '1px', md: '2px' }}
                            color={area.primary_color}
                            boxSizing='border-box'
                            display='grid'
                            placeItems='center'
                            as='label'
                            htmlFor={area.id}
                        >
                            <Circle
                                size={{ base: '8px', sm: '10px', md: '8px', lg: '12px' }}
                                bg={selected_areas_of_focus_ids.includes(area.id) ? area.primary_color : 'transparent'}
                            ></Circle>
                        </Circle>
                        <Text
                            fontSize={{ base: '1rem', sm: '1.2rem', lg: '1.4rem', xl: '1.65rem' }}
                            sx={{
                                color: area.primary_color,
                            }}
                            as='label'
                            htmlFor={area.id}
                        >
                            {area.text}
                        </Text>

                        <input
                            type='checkbox'
                            id={area.id}
                            hidden
                            aria-label='checkbox'
                            onChange={(e) => {
                                const target = e.target as HTMLInputElement

                                if (target.checked) {
                                    onSelect(area.id)
                                } else {
                                    onDeselect(area.id)
                                }
                            }}
                        />
                    </HStack>
                ))}
            </Flex>
        </>
    )
}
