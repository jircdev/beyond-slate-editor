import * as React from 'react';

export function Image(props): JSX.Element {
    const {attributes, element, children} = props;

    
    return (
        <figure {...attributes}>
            <img src={element.src} alt={element.alt}/>
            {children}
        </figure>
    );
}
