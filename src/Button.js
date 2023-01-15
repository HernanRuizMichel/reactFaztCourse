import Proptypes from "prop-types";

export function Button({text}){
    return <button>{text}</button>
}

Button.prototype = {
    text: Proptypes.string.isRequired
}