import * as React from 'react';

export function Title(props) {
    const { children } = props;

    return (
        <h1>{children}</h1>
    )
}