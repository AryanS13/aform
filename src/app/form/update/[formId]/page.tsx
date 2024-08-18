'use client'
import FormDetail, { FormDetailProps } from "@/components/form-detail/form-detail";

export default function FormUpdate() {

    const formDetailProps: FormDetailProps = {
        newForm: false
    }


    return (
            <FormDetail {...formDetailProps} />
    )
}