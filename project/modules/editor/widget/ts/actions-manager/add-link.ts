import { Editor } from "slate";
import { insertLink } from "../actions/add-link";

export const addLink = (editor) => {
    const { selection } = editor;
    if (!selection) return;
    console.log(editor)

    const selectedText = Editor.string(editor, selection)

    if (selectedText !== '') {
        const url = prompt('Insert a url');
        insertLink(editor, url, selectedText);
        return;
    }

    const linkName = prompt('Insert a name for the url');
    const url = prompt('Insert the url');
    insertLink(editor, url, linkName);
}