import * as React from "react";
import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { EditorContext } from "./context";
import { TextEditor } from "./components/editor/";
import { HeaderEditor } from "./components/editor/header";
import { Descendant } from 'slate';
import { Results } from "./components/result";

const content = JSON.parse(localStorage.getItem('__content')) || [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
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
                <div className="focus">
                    <div className="editor-container">
                        <HeaderEditor />
                        <TextEditor />
                    </div>
                    <Results />
                </div>
            </div>
        </EditorContext.Provider>
    )
}