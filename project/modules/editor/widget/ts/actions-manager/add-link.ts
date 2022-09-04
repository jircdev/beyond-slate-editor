import { Editor } from "slate";
import { insertLink } from "../actions/add-link";

export const addLink = (editor) => {
    const { selection } = editor;
    const selectedText = Editor.string(editor, selection);
    const isSelectedTextEmpty = selectedText === '';

    if (!selection || isSelectedTextEmpty) return;

    const url = prompt('Insert a url');
    insertLink(editor, url, selectedText);
    return;
}