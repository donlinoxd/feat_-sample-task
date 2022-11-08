import { AreaOfFocusType } from 'lib/types'
import Image from 'next/image'

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
    return (
        <>
            <Image
                src='https://drive.google.com/uc?export=view&id=1I_VmSQsMasurogCtHUYKZqUzb73FdPxF'
                alt='areas of focus'
                width={500}
                height={500}
                layout='responsive'
                objectFit='contain'
            />
        </>
    )
}
