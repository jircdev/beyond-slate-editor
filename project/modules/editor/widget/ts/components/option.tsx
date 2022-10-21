import * as React from 'react';
import { addLink } from '../actions-manager/add-link';
import { addImage } from '../actions-manager/load-image';
import { toggleBoldMark } from '../actions/set-bold';
import { toggleCodeBlock } from '../actions/set-code';
import { useEditorContext } from '../contexts/EditorContext';

const ACTIONS = {
    link: addLink,
    image: addImage,
    bold: toggleBoldMark,
    code: toggleCodeBlock
};

interface Props {
    dataAction: string,
    name: string,
    needAFile?: boolean
}

export
function Option({ dataAction, name, needAFile }: Props): JSX.Element {
    const { editor } = useEditorContext();
    const fileRef = React.useRef(null);

    const actionManager = (event) => {
        const { selection } = editor;
        if (!selection) return;

        ACTIONS[dataAction](editor, fileRef);
    }

    return (
        <>
            <button
                type="button"
                data-action={dataAction}
                onMouseDown={actionManager}
            >
                {name}
            </button>

            {
                needAFile &&
                    <input 
                        onChange={actionManager}
                        type="file"
                        className="file-input" 
                        ref={fileRef} 
                />
            }
        </>
    )
}