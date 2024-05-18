import Button, { BUTTON_STYLES, BUTTON_TYPES, ButtonProp } from "../global-components/button";


export default function ResponseDetail() {

    const increaseRespLimitBtn: ButtonProp = {
        text: 'Increase response limit',
        type: BUTTON_TYPES.PRIMARY,
        style: BUTTON_STYLES.NORMAL
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