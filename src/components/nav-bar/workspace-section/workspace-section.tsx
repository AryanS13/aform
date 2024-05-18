import { DropDown } from "@/components/global-components/dropdown";

export default function WorkSpaceSection() {
    return (
        <div className="flex items-center">
            <DropDown {...{text: 'A', type: 'button', secondaryText:'aryanoffice'}}/>
        
        </div>
    )
}