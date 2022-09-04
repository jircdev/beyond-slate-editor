import React, { createContext, useContext, useState } from 'react';
import { createEditor } from 'slate';
import { withReact } from 'slate-react';

export const EditorContext = createContext(null);
export const useEditorContext = () => useContext(EditorContext);

export /*bundle*/
function EditorContextProvider({ children }): JSX.Element {
    const [editor] = useState(() => withReact(createEditor()));

    return (
        <EditorContext.Provider value={{ editor }}>
            { children }
        </EditorContext.Provider>
    )
}