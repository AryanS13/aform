'use client'

import { useState } from "react";
import Button, { ButtonProp } from "./button";
import { BUTTON_TYPES, BUTTON_VARIANTS } from "@/helpers/utils"

export interface DropdDownProp {
    type: 'button' | 'icon'
    text: string,
    secondaryText?: string
}

export function DropDown(props: DropdDownProp) {

    const [isOpen, setIsOpen] = useState(false)

    const buttonProps: ButtonProp = {
        text: props.text,
        type: BUTTON_TYPES.PRIMARY,
        variant: BUTTON_VARIANTS.NORMAL
    }


    return (
        <div className="relative">
            <div className="flex gap-1 items-center cursor-pointer"
                onClick={() => setIsOpen(val => { return !val})}
                >
                <Button {...buttonProps}></Button>
                {props.secondaryText && 
                    <span className="text-black flex items-center">aryanoffice13
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </span>
                }
            </div>
            {isOpen && 

                <div id="dropdown" className="z-10 absolute top-[46px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                    </ul>
                </div>
            }
        </div>

    );
}