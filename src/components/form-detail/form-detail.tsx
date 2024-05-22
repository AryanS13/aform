import { BUTTON_ICON_POSITIONS, BUTTON_STYLES, BUTTON_TYPES, BUTTON_VARIANTS, INPUT_TYPES } from "@/helpers/utils";
import Button from "../global-components/button";
import Tabs, { TabsProps } from "../global-components/tabs";
import SearchAbleDropDown from "../global-components/search-dropdown";
import { DropdownProps, ToggleSwitchProps } from "@/helpers/prop-types";
import ToggleSwitch from "../global-components/toggle-switch";
import QuestionBox from "../question-box/question-box";
import { Cog6ToothIcon, PlayIcon, PlusIcon, ComputerDesktopIcon, AdjustmentsHorizontalIcon, ArrowsRightLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import Seperator from "../global-components/seperator";
import Input from "../global-components/Input";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

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
        {name: 'Required', checked: false},
        {name: 'Max Characters', checked: false},
        {name: 'Mobile allowed', checked: false}
    ]

    const dummyQuestionData = [
        {
            question: 'What is your name',
            type: 'short_answer',
            type_no: 1
        },
        {
            question: 'What is your hobby',
            type: 'short_answer',
            type_no: 1
        },
        {
            question: 'How good this will be I cannot wait for the defender',
            type: 'short_answer',
            type_no: 1
        }
    ];

    const endingsDummyData = [
        {
            question: 'What is your name',
            type: 'ending',
            type_no: -1
        },
        {
            question: 'What is your hobby',
            type: 'ending',
            type_no: -1
        },
        {
            question: 'How good this will be I cannot wait for the defender',
            type: 'ending',
            type_no: -1
        }
    ]

    return (
        <div className="form-container-box h-svh w-svw p-4 flex">
            <div className="questions-list-container w-1/5 flex flex-col gap-1 h-full p-2">
                <div className="questions-list rounded-md bg-stone-100 p-2 overflow-auto resize-y">
                    <div className="flex flex-col gap-4">
                        <QuestionBox {...{list: dummyQuestionData}}/>
                    </div>
                </div>
                <div className="endings rounded-md bg-stone-100 p-4 flex-auto">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between items-center">
                            <span className="text-md font-medium">End</span>
                            <Button {...{text: '', icon: PlusIcon,type: BUTTON_TYPES.PRIMARY, variant: BUTTON_VARIANTS.NORMAL, style: BUTTON_STYLES.STROKE, iconPosition: BUTTON_ICON_POSITIONS.LEFT}}/>
                        </div>
                        <QuestionBox {...{list: endingsDummyData}} />
                    </div>
                </div>

            </div>
            <div className="form-preview w-3/5 p-2">
                <div className="options-bar rounded-md bg-stone-100 gap-7 flex p-4 items-center">
                    <Button {...{text: 'Add content', type: BUTTON_TYPES.PRIMARY, style: BUTTON_STYLES.STROKE, icon: PlusIcon, iconPosition: BUTTON_ICON_POSITIONS.LEFT}} />
                    <div><ComputerDesktopIcon className="h-[20px] cursor-pointer" /></div>
                    <div><PlayIcon className="h-[20px] cursor-pointer bg-transparent" /></div>
                    <div>< Cog6ToothIcon className="h-[20px] cursor-pointer" /></div>
                </div>
                <div className="preview rounded-md bg-stone-100 gap-1 flex justify-center">
                    <img src="/dummy.png" className="h-dvh" />
                </div>

            </div>
            <div className="question-detail-container flex flex-col gap-2 w-1/5">
                <div>
                    <Tabs {...tabsProps} />
                </div>

                <div className="py-4 px-4">
                    <SearchAbleDropDown {...searchAbleDropdownList} />
                </div>

                <div className="px-4">
                    <Seperator />
                </div>

                <div className="gap-2 flex flex-col py-5 px-4 gap-5">
                    <span className="text-md font-medium">Settings</span>
                    {toggleSwitchList.map( item => 
                        <ToggleSwitch {...item} />
                    )}
                </div>

                <div className="px-4">
                    <Seperator />
                </div>

                <div className="image-toolbar flex gap-2 py-5 px-4 justify-between">
                    <span className="text-md font-medium justify-center">
                        Image or Video
                    </span>
                    <span className="flex gap-2 content-end items-center">
                        <ArrowsRightLeftIcon className="h-5 cursor-pointer" />
                        <AdjustmentsHorizontalIcon className="h-5 cursor-pointer" />
                        <TrashIcon className="h-5 cursor-pointer" />
                    </span>
                </div>

                <div className="px-4">
                    <Seperator />
                </div>

                <div className="image-toolbar flex flex-col gap-5 py-5 px-4 justify-between">
                    <span className="text-md font-medium justify-center">
                        Alternative image text
                    </span>
                    <Input {...{type: INPUT_TYPES.TEXTAREA}}/>
                </div>
            </div>
        </div>
    )
}