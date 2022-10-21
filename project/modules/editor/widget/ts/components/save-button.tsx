import React from 'react';
import { useEditorContext } from '../contexts/EditorContext';

export function SaveButton(): JSX.Element {
    const { editor } = useEditorContext();

    function save() {
        console.log(editor);
    }

    return (
        <button onClick={save}>
            Download as JSON
        </button>
    )
}