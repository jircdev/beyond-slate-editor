import * as React from 'react';
import { useEditorContext } from '../../context';
import { serialize } from '../../utils/serialize';
import { ResultsHeader } from './header';

export function Results(): JSX.Element {
    const { value } = useEditorContext();

    const elements = serialize(value).map(element => (
        <li key={element}><p>{element}</p></li>
    ))

    return (
        <div className="results">
            <ResultsHeader />
            <aside className="results-aside">
                <ul>
                    {elements}
                </ul>
            </aside>
        </div>
    )
}