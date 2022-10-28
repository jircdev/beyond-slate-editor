import {Editor, Transforms, Element} from "slate";
import { createParagraphNode } from './add-paragraph';

// Just create a link element.
export const createTitleNode = (text: string, type: string) => ({
    type,
    children: [{text}]
});

// Create a link and put it in the document
export function insertTitle(editor, type: string, text: string) {
    const { selection } = editor;
    const selectedText = Editor.string(editor, selection);
    const isSelectedTextEmpty = selectedText === '';

    if (isSelectedTextEmpty) return;

    // Convierte el texto seleccionado en un link usando la url pasada y el texto en si como label
    Editor.insertNode(editor, createTitleNode(selectedText, 'h1'));
    Editor.insertNode(editor, createParagraphNode(), { select: true }); // Esto permite porder escribir texto luego del link
}

// Function that allow us to remove a link.
export const removeLink = (editor, opts = {}) => {
    Transforms.unwrapNodes(editor, {
        ...opts,
        match: (node) =>
            !Editor.isEditor(node) && Element.isElement(node) && node.type !== "paragraph"
    });
};