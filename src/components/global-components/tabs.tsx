import { useState } from "react"

export interface TabsProps {
    values: Array<string>
}

export default function Tabs(props: TabsProps) {

    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className="bg-white w-full flex flex-col rounded-md gap-1">
            <nav className="flex flex-col sm:flex-row bg-stone-100">
                {props.values.map((val, index)=> {
                    return ( 
                        <div>
                            <button className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none 
                                ${index === currentTab ? 'border-b-2 text-blue-500 font-medium border-blue-500' : ''}`}
                                onClick={()=> {setCurrentTab(index)}}
                                >
                                {val}
                            </button>
                        </div>
                    )
})}
            </nav>
        </div>
    )
}