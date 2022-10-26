import * as React from 'react'

export function Paragraph(props): JSX.Element {
    const {children} = props;

    return (
        <p>{children}</p>
    )
}