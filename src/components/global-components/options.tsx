import { OptionProps } from "@/helpers/prop-types";
import { COLOR_TYPES } from "@/helpers/utils";

export type OptionCompProps = {
    options: Array<OptionProps>,
    onClick: (event: OptionProps) => void
}

export function Options(props: OptionCompProps) {

    console.log(props);

    return (
        <>
        <div className="relative">
            <div id="dropdown" className="z-10 absolute top-[46px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-100">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            {
                
                props.options.map((res, index) => (
                        <li key={index}>
                            <span
                                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${res?.color ? 'text-'+res.color : 'text-black'}`}
                                onClick={() => props.onClick(res)}
                            >{res.name}</span>
                        </li>
                    )
                )
            }
            </ul>
        </div>
        </div>
    </>
    );
}