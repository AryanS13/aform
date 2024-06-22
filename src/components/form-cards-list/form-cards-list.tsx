'use_client'
import { Form } from "@/models/form.model"
import { ListResult } from "@/models/utils.models"
import Link from "next/link"
import { FormContext } from "@/contexts/form.context"
import { useContext } from "react"

export interface FormCardListProps {
    formsList: ListResult<Form>,
    onClick: Function
}

export function FormCardsList(props: FormCardListProps) {

    // @ts-ignore
    const { form, setForm } = useContext(FormContext);

    console.log(form);

    if (!props?.formsList?.count) {
        return <></>
    }

    function selectForm(form: Form) {

        props.onClick(form);
        setForm(form)
    }
    return <>
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gray- py-6 sm:py-12">
        <div className="mx-auto max-w-screen-xl px-4 w-full">
            <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

                {props.formsList.results.map((form, index)=> {
                    return ( 
                        <Link key={index} href={`/form/update/${form.id}`}>
                            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"  onClick={() => selectForm(form)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <div className="h-auto overflow-hidden">
                                    <div className="h-44 overflow-hidden relative">
                                        <img src="https://images.ctfassets.net/co0pvta7hzrh/1IVyN1TY12DlgQGv5ZCK34/2cea2530e6da428656c4fc613b3f37cb/Group_1982249276.png?fm=webp&q=75&w=1000" alt="" />
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-3">
                                    <h3 className="text-xs mb-2 font-medium">{form.title}</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-gray-400">
                                        Lorem, ipsum dolor sit amet
                                        </p>
                                        <div className="relative z-40 flex items-center gap-2">
                                           
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                            </svg>
                                            
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                            </svg>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </Link> 
                    )
                })}
                
            </div>
        </div>
    </div>
</>
}