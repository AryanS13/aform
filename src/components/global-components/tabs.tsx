export interface TabsProps {
    values: Array<string>
}

export default function Tabs(props: TabsProps) {

    return (
        <div className="bg-white w-full flex flex-col rounded-md gap-1">
            <nav className="flex flex-col sm:flex-row bg-stone-100">
                {props.values.map(val=>
                    <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                        {val}
                    </button>
                )}
            </nav>
        </div>
    )
}