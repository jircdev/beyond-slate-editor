import * as React from 'react';
import { addLink } from '../actions-manager/add-link';
import { toggleBoldMark } from '../actions/set-bold';
import { toggleCodeBlock } from '../actions/set-code';
import { useEditorContext } from '../contexts/EditorContext';

const ACTIONS = {
    link: addLink,
    image: '',
    bold: toggleBoldMark,
    code: toggleCodeBlock
};

interface Props {
    dataAction: string,
    name: string
}

export
function Option({ dataAction, name }: Props): JSX.Element {
    const { editor } = useEditorContext();

    const actionManager = () => {
        ACTIONS[dataAction](editor);
    }

    return (
        <button
            type="button"
            data-action={dataAction}
            onMouseDown={actionManager}
        >
            {name}
        </button>
    )
}