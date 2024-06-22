'use client'
import FormDetail from "@/components/form-detail/form-detail";
import { FormContext } from "@/contexts/form.context";

import { useContext } from "react";

export default function FormUpdate() {

    const {form, setForm} = useContext(FormContext);
    
    console.log('Getting result now')
    console.log(form);
    return (
            <FormDetail />
    )
}