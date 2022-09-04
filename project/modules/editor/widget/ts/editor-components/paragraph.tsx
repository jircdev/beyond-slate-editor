import * as React from "react";

export const Paragraph = props => {
    return <p className="inline" {...props.attributes}>{props.children}</p>
}