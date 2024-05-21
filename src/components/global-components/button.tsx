// "use client"
import "../../styles/product.scss"
import { BUTTON_TYPES, BUTTON_STYLES } from "@/helpers/utils"

export interface ButtonProp {
    type: BUTTON_TYPES,
    text: string,
    style?: BUTTON_STYLES,
    onClick?: () => void
}

export default function Button(props: ButtonProp) {

    switch(props.style) {
        case BUTTON_STYLES.CIRCULAR:
            return (
                <button className="btn-common rounded-full bg-blue-700 aspect-square"
                    onClick={props.onClick}
                    >
                    {props.text}
                </button>
            );
        default:
            return (
                <button className="btn-common text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                onClick={props.onClick}
                >
                {props.text}
                </button>
            )
    }

}