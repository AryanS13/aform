import { DropDown, DropdDownProp } from "../global-components/dropdown";
import Button from "../global-components/button";
import { ToggleButton } from "../global-components/toggle-btn";


export default function WorkSpaceBar() {

    const dropdDownProp: DropdDownProp = {
        text: '...',
        type: 'icon',
        
    }

    const sortDropDownProp: DropdDownProp = {
        text: 'Sort by',
        type: 'button'
    }
    return (
        <div className="py-4 flex justify-between border-b-2 border-grey-100">
            <div className="flex gap-2 items-center">
                <span>Typeform workspace-1</span>
                <DropDown {...dropdDownProp} />
                <Button {...{text: 'user invite'}}/>
            </div>
            <div className="flex gap-2 items-center">
                <DropDown {...sortDropDownProp} />
                <ToggleButton />
            </div>
        </div>
    )
}