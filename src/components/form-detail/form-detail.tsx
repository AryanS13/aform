import { BUTTON_ICON_POSITIONS, BUTTON_STYLES, BUTTON_TYPES } from "@/helpers/utils";
import Button from "../global-components/button";
import Tabs, { TabsProps } from "../global-components/tabs";
import SearchAbleDropDown from "../global-components/search-dropdown";
import { DropdownProps, ToggleSwitchProps } from "@/helpers/prop-types";
import ToggleSwitch from "../global-components/toggle-switch";
import QuestionBox from "../question-box/question-box";
import { ComputerDesktopIcon, PlayIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Cog6ToothIcon } from "@heroicons/react/16/solid";

export default function FormDetail() {

    const tabsProps: TabsProps = {
        values: ['Question', 'Design', 'Logic']
      }
    
    const searchAbleDropdownList: DropdownProps = {
        values: [{
            name: 'Short answer',
            value: 1,
        },
        {
            name: 'Long answer',
            value: 2,
        }]
    }

    const toggleSwitchList: Array<ToggleSwitchProps> = [
        {name: 'Val', checked: false},
        {name: 'Val', checked: false},
        {name: 'Val', checked: false}
    ]

    return (
        <div className="form-container-box h-svh w-svw p-4 flex">
            <div className="questions-list-container w-1/5 flex flex-col gap-1 h-full p-2">
                <div className="questions-list rounded-md h-[70%] bg-stone-100 p-2">
                    <div className="flex flex-col gap-4">
                        <QuestionBox />
                    </div>
                </div>
                <div className="endings rounded-md bg-stone-100 p-2">
                    <div>This is ending one</div>
                    <div>This is ending one</div>
                </div>

            </div>
            <div className="form-preview w-3/5 p-2">
                <div className="options-bar rounded-md bg-stone-100 gap-7 flex p-4 items-center">
                    <Button {...{text: 'Add content', type: BUTTON_TYPES.PRIMARY, style: BUTTON_STYLES.STROKE, icon: PlusIcon, iconPosition: BUTTON_ICON_POSITIONS.LEFT}} />
                    <div><ComputerDesktopIcon className="h-[20px] cursor-pointer" /></div>
                    <div><PlayIcon className="h-[20px] cursor-pointer" /></div>
                    <div>< Cog6ToothIcon className="h-[20px] cursor-pointer" /></div>
                </div>
                <div className="preview rounded-md bg-stone-100 gap-1">

                </div>

            </div>
            <div className="question-detail-container flex flex-col gap-2 w-1/5">
                <div>
                    <Tabs {...tabsProps} />
                </div>

                <div className="">
                    <SearchAbleDropDown {...searchAbleDropdownList} />
                </div>

                <div className="gap-2 flex flex-col">
                    {toggleSwitchList.map( item => 
                        <ToggleSwitch {...item} />
                    )}
                </div>
            </div>
        </div>
    )
}