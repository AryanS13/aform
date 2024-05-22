import { ArrowRightEndOnRectangleIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import KebabMenu from "../global-components/kebab-menu";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";

export interface QuestionProps {
    list: Array<any>;
}

export default function QuestionBox(props: QuestionProps) {

    const currentQuestion = 0;
    
    return (
        <>

        {props.list.map((res, index) => {
                switch(res.type_no ) {
                    case 1:
                        return (<div key={index}>
                        <div className={`${currentQuestion === index ? 'bg-slate-200':''} question group/item flex items-center p-3 rounded-md hover:bg-stone-200 min-h-12 gap-2 cursor-pointer`}>
                            <span className={`bg-blue-200 w-[15%] flex items-center p-1`}>
                                <Bars3BottomLeftIcon className="h-[20px]" />
                                <span className="text-[10px]">1</span>
                            </span>
                            <span className="w-[75%] text-sm max-h-10 overflow-clip truncate ...">{res.question}</span> {/* Changed ${res.question} to {res.question} */}
                            <span className={`group/edit  content-center cursor-pointer ${currentQuestion === index ? 'visible': 'invisible hover:bg-slate-200 group-hover/item:visible'}`}>
                                <KebabMenu />
                            </span>
                        </div>
                    </div>)

                    default:
                        return (
                        <div className="h-7 flex w-16 bg-slate-200 p-2 rounded-lg justify-between items-center cursor-pointer">
                            <DocumentDuplicateIcon className="h-4" />
                            <span className="text-lg font-normal">{index+1}</span>
                        </div>)

                }
})}
        </>
    )
}