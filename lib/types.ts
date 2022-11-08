export interface EnvParamsType {
    env: any
}

/**
 * describes a specialty of a Professional
 */
export interface AreaOfFocusType {
    /**
     * unique identifier for the area of focus
     */
    id: string
    /**
     * text that describes the area of focus in plain english
     * ex: "anxiety-and-stress"
     */
    text: string
    /**
     * color of the text and border of the area of focus
     * ex: "Anxiety & Stress"
     */
    primary_color: string

    /**
     * color of the background of the area of focus
     */
    secondary_color: string
}
