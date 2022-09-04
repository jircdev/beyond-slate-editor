import * as React from "react";
import { TextEditor } from "./components/text-editor";
import { HeaderEditor } from "./components/header";
import { TitleEditor } from "./components/title";
import { EditorContextProvider } from "./contexts/EditorContext";



export /*bundle*/
function Widget() {

    return (
        <EditorContextProvider>
            <div className="page-container">
                <TitleEditor/>
                <HeaderEditor />
                <TextEditor />
            </div>
        </EditorContextProvider>
    )
}
