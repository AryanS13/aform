import { COLOR_TYPES } from "./utils"

export interface DropdownProps {
    values: Array<any>
}

export interface ToggleSwitchProps {
    name: string
    checked: boolean
}

export interface OptionProps {
    name: string,
    heading?: boolean,
    color?: COLOR_TYPES
}