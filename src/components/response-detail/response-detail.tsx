import Button, { ButtonProp } from "../global-components/button";
import { BUTTON_TYPES, BUTTON_VARIANTS } from "@/helpers/utils"


export default function ResponseDetail() {

    const increaseRespLimitBtn: ButtonProp = {
        text: 'Increase response limit',
        type: BUTTON_TYPES.PRIMARY,
        variant: BUTTON_VARIANTS.NORMAL
    }
    return (
        <div className="flex flex-col">
            <span>Response collected</span>

            <span>0/10</span>

            <span>Resets on Jun 18</span>

            <Button {...increaseRespLimitBtn} />
        </div>
    )
}