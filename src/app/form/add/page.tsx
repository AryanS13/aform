import FormDetail, { FormDetailProps } from "@/components/form-detail/form-detail";


export default function AddForm() {

    const formDetailProps: FormDetailProps = {
        newForm: true
    }
    
    
    return (
        <FormDetail {...formDetailProps} />
    )
}