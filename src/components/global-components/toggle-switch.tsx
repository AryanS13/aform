'use client'
import { useState } from "react"
import "../../styles/product.scss"
import { ToggleSwitchProps } from "@/helpers/prop-types"

export default function ToggleSwitch(props: ToggleSwitchProps) {

    const [toggleActive, setToggleActive] = useState(props.checked)

    return (
        <div className="flex justify-between items-center" onClick={() => setToggleActive((val) =>  {return !val})}>
            <h2>{props.name}</h2>
            <div className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${ toggleActive ? 'bg-green-400' : ''}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${ toggleActive ? 'translate-x-6': ''}`}></div>
            </div>
        </div>
    )
}