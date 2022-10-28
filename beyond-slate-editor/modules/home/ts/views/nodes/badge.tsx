import * as React from 'react';

export function Badge(props) {
    const { children } = props;

    return (
        <div className="badge">
            {children}
        </div>
    )
}