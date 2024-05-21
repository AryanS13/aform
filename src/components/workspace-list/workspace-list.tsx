'use client'

import Button, { ButtonProp } from "../global-components/button"
import { BUTTON_TYPES, BUTTON_STYLES } from "@/helpers/utils"
import { useState } from "react"

export interface WorkSpaceListProp {
    listItems: Array<string>
}

export default function WorkSpaceList(props: WorkSpaceListProp) {

    const [isWorkSpaceListVisible, setIsWorkSpaceVisible] = useState(true)

    const addButton: ButtonProp = {
        text: '+',
        type: BUTTON_TYPES.PRIMARY,
        style: BUTTON_STYLES.NORMAL
    }

    return (
        <div>
            <div className="header-button flex justify-between">
                Workspaces
                <Button {...addButton} />
            </div>

            <div className="flex">
                <div className="relative group"
                onClick={() => setIsWorkSpaceVisible((val) => {return !val})}>
                    <button id="dropdown-button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                    <span className="mr-2">Private</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
            </div>
            
            {isWorkSpaceListVisible && 
            
            <div id="dropdown-menu" className="mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
        
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Uppercase</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Lowercase</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Camel Case</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kebab Case</a>
            </div>
            }

        </div>
    )

}