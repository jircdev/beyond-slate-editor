import React, { useCallback, useState } from 'react';
import { BaseEditor, Descendant, Editor } from 'slate';
import { Editable, ReactEditor, Slate } from "slate-react";
import { useEditorContext } from '../contexts/EditorContext';
import { isHotkey } from '../utils/hotkeys';
import { onReanderLeaf, onRenderElement } from '../utils/render';
import { serialize } from '../utils/serialize';

type CustomElement = { type: 'paragraph'; children: [{ text: '' }] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
    'mod+shift': 'inlineCode',
}

export
function TextEditor(): JSX.Element {
    const { editor } = useEditorContext();

    const content = JSON.parse(localStorage.getItem('content')) || [
        {
            type: 'paragraph',
            children: [{text: 'A line of text in a paragraph.'}],
        },
    ]

    const initialValue: Descendant[] = content;
    const [value, setValue] = useState<Descendant[]>(initialValue)

    const onChange = newValue => {
        const isAstChange = editor.operations.some(
            op => {
                return 'set_selection' !== op.type
            }
        )
        if (isAstChange) {
            // Save the value to Local Storage.
            console.log(serialize(value));
            const content = JSON.stringify(value)
            localStorage.setItem('__content', content)
        }

        setValue(newValue);
    }

    const isMarkActive = (editor, format) => {
        const marks = Editor.marks(editor)
        return marks ? marks[format] === true : false
    }

    const toggleMark = (editor, format) => {
        const isActive = isMarkActive(editor, format)
        if (isActive) Editor.removeMark(editor, format)
        else Editor.addMark(editor, format, true)
    }

    

    const renderElement = useCallback(onRenderElement, [])
    // Define a leaf rendering function that is memoized with `useCallback`.
    const renderLeaf = useCallback(onReanderLeaf, [])


    const onKeyDown = event => {
        if (!event.ctrlKey) {
            return
        }
        for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, {}, event as any)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
            }
        }
    }


    return (
        <Slate editor={editor} value={value} onChange={onChange}>
            <Editable
                renderLeaf={renderLeaf}
                renderElement={renderElement}
                onKeyDown={onKeyDown} 
                className="beyond-editor" />
        </Slate>
    )
}