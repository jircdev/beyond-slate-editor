import * as React from "react";

export function CodeBlock(props): JSX.Element {
    const { attributes, children } = props

    return (
        <pre {...attributes}>
            <code>{children}</code>
        </pre>
    )
}
