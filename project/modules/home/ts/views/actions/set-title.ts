import {Editor, Transforms, Element} from "slate";
import { createParagraphNode } from './add-paragraph';

// Just create a link element.
export const createTitleNode = (text: string, type: string) => ({
    type,
    children: [{text}]
});

// Create a link and put it in the document
export function insertTitle(editor, type: string) {
    const { selection } = editor;
    const selectedText = Editor.string(editor, selection);
    const isSelectedTextEmpty = selectedText === '';

    if (isSelectedTextEmpty) return;

    const pathClone = [...selection.anchor.path];
    pathClone.pop(); 
    const focusedNode = pathClone.reduce((node, pathPosition) => {
      if (!node) return editor.children[pathPosition];
      return node.children[pathPosition];
    }, null);
    console.log(0, selection);

    if (focusedNode.type === 'h1') {
        Editor.insertNode(editor, createParagraphNode(focusedNode.children));
        Transforms.removeNodes(editor, {at: Editor.after(editor, selection.anchor)});
        Transforms.removeNodes(editor, {at: selection.anchor.path});
        return;    
    }

    // Convierte el texto seleccionado en un link usando la url pasada y el texto en si como label
    Editor.insertNode(editor, createTitleNode(selectedText, 'h1'));
    Editor.insertNode(editor, createParagraphNode(), { select: true }); // Esto permite porder escribir texto luego del link
}