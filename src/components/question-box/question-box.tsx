import KebabMenu from "../global-components/kebab-menu";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";

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

export default function QuestionBox() {
    
    return (
        <>

        {dummyQuestionData.map((res, index) => (
                <div key={index}>
                    <div className="question flex items-center p-3 rounded-md bg-stone-200 min-h-12 gap-2">
                        <span className="bg-blue-200 w-[15%] flex items-center p-1">
                            <Bars3BottomLeftIcon className="h-[20px]" />
                            <span className="text-[10px]">1</span>
                        </span>
                        <span className="w-[75%] text-sm max-h-10 overflow-clip truncate ...">{res.question}</span> {/* Changed ${res.question} to {res.question} */}
                        <span className="w-[10%] hover:bg-stone-300 flex content-center cursor-pointer">
                            <KebabMenu />
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}