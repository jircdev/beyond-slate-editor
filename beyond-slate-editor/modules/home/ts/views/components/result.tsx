import * as React from 'react';
import { useEditorContext } from '../context';
import { serialize } from '../utils/serialize';

export function Results(): JSX.Element {
    const { value } = useEditorContext();

    const elements = serialize(value).map(element => (
        <li key={element}><p>{element}</p></li>
    ))

    return (
        <aside className="results">
            <ul>
                {elements}
            </ul>
        </aside>
    )
}