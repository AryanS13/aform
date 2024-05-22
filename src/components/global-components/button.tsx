// "use client"
import "../../styles/product.scss"
import { BUTTON_ICON_POSITIONS, BUTTON_STYLES, BUTTON_TYPES, BUTTON_VARIANTS, ICON_SIZES } from "@/helpers/utils"

export interface ButtonProp {
    type: BUTTON_TYPES,
    text: string,
    variant?: BUTTON_VARIANTS,
    style?: BUTTON_STYLES,
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    iconPosition?: BUTTON_ICON_POSITIONS,
    iconSize?: ICON_SIZES,
    onClick?: () => void
}

export default function Button(props: ButtonProp) {

    let btnClass = 'btn-common'

    switch (props.style) {
        case BUTTON_STYLES.FILLED:
            btnClass = 'btn-common';
            break;
        case BUTTON_STYLES.STROKE:
            btnClass = 'bg-white text-black hover:text-white border-solid border-2 border-black dark:hover:bg-slate-700 dark:focus:ring-slate-800';
            break;
        case BUTTON_STYLES.TEXT:
            btnClass = 'border-none'

    }
    switch(props.variant) {
        case BUTTON_VARIANTS.CIRCULAR:
            return (
                <button className="btn-common rounded-full bg-blue-700 aspect-square"
                    onClick={props.onClick}
                    >
                    {props.text}
                </button>
            );
        default:
            return (
                <button className={`flex justify-center min-w-[40px] min-h-[34px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center items-center ${btnClass} gap-2`} type="button"
                onClick={props.onClick}
                >
                    {props?.icon && props?.iconPosition === BUTTON_ICON_POSITIONS.LEFT && 
                    (
                        <props.icon className={`${props.iconSize ? 'h-[' + props.iconSize + ']' : 'h-[16px]'}`} />
                    )
                    }

                { props.text && <span>{props.text}</span>}

                {props?.icon && props?.iconPosition === BUTTON_ICON_POSITIONS.RIGHT && 
                    <>
                        <props.icon className={`${props.iconSize ? 'h-[' + props.iconSize + ']' : 'h-[16px]'}`} />
                    </>
                    }
                </button>
            )
    }

}