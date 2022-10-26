import React, { useCallback, useState } from 'react';
import { BaseEditor } from 'slate';
import { Editable, ReactEditor, Slate } from "slate-react";
import { useEditorContext } from '../context';
import { onReanderLeaf, onRenderElement } from '../utils/render';

type CustomElement = { type: 'paragraph'; children: [{ text: '' }] };
type CustomText = { text: string };

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
};

export
function TextEditor(): JSX.Element {
    const { editor, value, setValue } = useEditorContext();

    const onChange = (newValue: string) => {
        const isAstChange = editor.operations.some(operation => 'set_selection' !== operation.type);

        if (isAstChange) {
            console.log(value)
            // Save the value to Local Storage.
            //console.log(serialize(value));
            const content = JSON.stringify(value);
            localStorage.setItem('__content', content);
        }

        setValue(newValue);
    }
    

    const renderElement = useCallback(onRenderElement, []);
    // Define a leaf rendering function that is memoized with `useCallback`.
    const renderLeaf = useCallback(onReanderLeaf, []);

    // TODO: AGREGAR HOT KEYS ENTRE ELLOS EL BREAK LINE
    // const onKeyDown = event => {
    //     const key = event.key.toLowerCase();
    //     HOTKEYS[key](editor);
        
    // }


    return (
        <Slate editor={editor} value={value} onChange={onChange}>
            <Editable
                renderLeaf={renderLeaf}
                renderElement={renderElement}
                // onKeyDown={onKeyDown} 
                className="beyond-editor" />
        </Slate>
    )
}