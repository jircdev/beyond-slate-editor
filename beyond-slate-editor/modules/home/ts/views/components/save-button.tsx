import React from 'react';
import { useEditorContext } from '../context';

export function SaveButton(): JSX.Element {
    const { editor } = useEditorContext();

    // TODO: MANEJAR PARA QUE MUESRE/DESCARGUE/GENERE UN ARCHIVO .JSON CON EL FORMATO QUE USA LA DOCU
    function save() {
        console.log(editor);
    }

    return (
        <button className="save-button" onClick={save}>
            Download as JSON
        </button>
    )
}