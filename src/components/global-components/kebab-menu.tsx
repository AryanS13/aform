'use client'
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { OptionProps } from "@/helpers/prop-types";
import { COLOR_TYPES } from "@/helpers/utils";
import { OptionCompProps, Options } from "./options";

export default function KebabMenu() {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const optionsCompProps: OptionCompProps = {
        options: [{
            name: 'Edit'
        },
        {
            name: 'delete',
            color: COLOR_TYPES.DANGER
        }]
    }

    return (
        <>
        <EllipsisVerticalIcon className="h-[20px] cursor-pointer" 
        onClick={() => setOptionsVisible(val => !val)}/>

            { optionsVisible &&
                    <Options {...optionsCompProps} />
            }
        </>
    )
}