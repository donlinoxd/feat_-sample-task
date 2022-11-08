import { AreaOfFocusType } from 'lib/types'
import Image from 'next/image'

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
