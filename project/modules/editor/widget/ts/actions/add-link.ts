import {Editor, Transforms, Element} from "slate";
import { createParagraphNode } from './add-paragraph';

// Just create a link element.
export const createLinkNode = (href: string, text: string) => ({
    type: 'link',
    href,
    children: [{text}]
});

// Create a link and put it in the document
export function insertLink(editor, href: string, label: string) {

    // Convierte el texto seleccionado en un link usando la url pasada y el texto en si como label
    Editor.insertNode(editor, createLinkNode(href, label));
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