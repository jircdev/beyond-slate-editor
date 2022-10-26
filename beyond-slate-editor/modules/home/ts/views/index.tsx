import * as React from "react";
import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { EditorContext } from "./context";
import { TextEditor } from "./components/text-editor";
import { HeaderEditor } from "./components/header";
import { Descendant } from 'slate';

const content = JSON.parse(localStorage.getItem('__content')) || [
    {
        type: 'paragraph',
        children: [{text: 'A line of text in a paragraph.'}],
    },
]

const initialValue: Descendant[] = content;

export /*bundle*/
function Page(): JSX.Element {
    const [editor] = React.useState(() => withReact(createEditor()));
    const [value, setValue] = React.useState<Descendant[]>(initialValue);

    const contextValue = {
        editor,
        value,
        setValue
    }
    return (
        <EditorContext.Provider value={contextValue}>
            <div className="page-container">
                {/* <TitleEditor/> */}
                <div className="editor-container">
                    <HeaderEditor />
                    <TextEditor />
                </div>
            </div>
        </EditorContext.Provider>
    )
}
