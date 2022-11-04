import {Editor, Transforms, Element} from "slate";
import { createParagraphNode } from './add-paragraph';

// Just create a link element.
export const createBadgeNode = (children: Node[]) => ({
    type: 'badge',
    children: children
});

// Create a link and put it in the document
export function insertBadge(editor) {
    const { selection } = editor;

    const theresNoChildrensSelected = selection === null && selection.anchor === null;
    if (theresNoChildrensSelected) return;

    const selectedText = Editor.string(editor, selection);

    // Convierte el texto seleccionado en un link usando la url pasada y el texto en si como label
    Editor.insertNode(editor, createBadgeNode([{text: selectedText}]));
    Editor.insertNode(editor, createParagraphNode(), { select: true }); // Esto permite porder escribir texto luego del link
}