import * as React from "react";

export const Paragraph = props => {
    return <p {...props.attributes}>{props.children}</p>
}