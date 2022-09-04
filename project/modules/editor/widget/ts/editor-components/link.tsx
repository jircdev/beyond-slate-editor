import * as React from 'react';
import { routing } from '@beyond-js/kernel/routing';

export function Link({ element, children }) {
    const { href } = element;

    const onClick = event => {
        event.preventDefault();
        routing.pushState(href);
    }

    return (
        <a 
            className="inline"
            onClick={onClick}
            href={href}
        >
            {children}
        </a>
    )
}
