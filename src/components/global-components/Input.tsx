import { INPUT_TYPES } from "@/helpers/utils";



export interface InputProps {
    type: INPUT_TYPES,
    id?: string
}

export default function Input(props: InputProps) {


    switch (props.type) {
        case INPUT_TYPES.TEXT:
            return (
                <input type="text" id="fname" name="fname"></input>
            )
            
        case INPUT_TYPES.TEXTAREA:
            return (
                
                <textarea className="border-slate-400 border-[1px]" id="text-area"></textarea>
                )
        default:
            break;
    }
    
}