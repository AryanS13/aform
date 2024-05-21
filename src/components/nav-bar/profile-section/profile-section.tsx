import Button, {ButtonProp} from "@/components/global-components/button";
import { BUTTON_TYPES, BUTTON_STYLES } from "@/helpers/utils"
const viewPlanBtnProps: ButtonProp = {
    text: 'View PLans',
    type: BUTTON_TYPES.PRIMARY,
    style: BUTTON_STYLES.NORMAL
}

const profileButton: ButtonProp = {
    text: 'AS',
    type: BUTTON_TYPES.PRIMARY,
    style: BUTTON_STYLES.CIRCULAR
}


export default function ProfileSection() {
    return (
        <div className="gap-4 flex flex items-center">
            <Button {...viewPlanBtnProps}/>
            <div className="help text-black">
             ?
            </div>
            <Button {...profileButton} />
        </div>
    )
}