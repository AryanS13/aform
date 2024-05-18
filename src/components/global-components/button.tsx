import "../../styles/product.scss"

export enum BUTTON_TYPES {
    PRIMARY,
    SECONDARY,
    DANGER
}

export enum BUTTON_STYLES {
    NORMAL,
    CIRCULAR,
}

export interface ButtonProp {
    type?: BUTTON_TYPES,
    text: string,
    style?: BUTTON_STYLES
}

export default function Button(props: ButtonProp) {

    switch(props.style) {
        case BUTTON_STYLES.CIRCULAR:
            return (
                <button className="btn-common rounded-full bg-blue-700 aspect-square">
                    {props.text}
                </button>
            );
        default:
            return (
                <button className="btn-common text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                        >{props.text}
                </button>
            )
    }

}