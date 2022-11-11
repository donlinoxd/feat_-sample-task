import { AreaOfFocusType } from 'lib/types'
import { useState } from 'react'
import AreasOfFocusSelector from './AreasOfFocusSelector'

interface Props {
    /**
     * all of the areas of focus that will be rendered
     */
    all_areas_of_focus: AreaOfFocusType[]
}

/**
 * Component that wraps AreasOfFocusSelector and manages the state so that users can select and deselect the areas of focus.
 *
 * UI design: https://www.figma.com/file/f4PqVjtJnM8ECBHKQJrkgd/MeTimeVar1?node-id=1085%3A21205
 */
export default function AreasOfFocusController({ all_areas_of_focus }: Props) {
    const [selectedAreasOfFocus, setSelectedAreasOfFocus] = useState<AreaOfFocusType['id'][]>([])

    const onSelect = (aof_id: string) => {
        setSelectedAreasOfFocus((areas) => [...areas, aof_id])
    }

    const onDeselect = (aof_id: string) => {
        setSelectedAreasOfFocus((areas) => areas.filter((area) => area !== aof_id))
    }

    return (
        <AreasOfFocusSelector
            {...{ all_areas_of_focus, onSelect, onDeselect, selected_areas_of_focus_ids: selectedAreasOfFocus }}
        />
    )
}
