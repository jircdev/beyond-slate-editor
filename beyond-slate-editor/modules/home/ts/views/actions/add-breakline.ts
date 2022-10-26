import {Editor, Transforms, Element} from "slate";
import { createParagraphNode } from "./add-paragraph";

export const createBreakRowNode = () => ({
    type: "br"
});

export function insertBreakLine(editor: Editor) {
   
    Editor.insertNode(editor, createBreakRowNode());
    Editor.insertNode(editor, createParagraphNode(), { select: true }); // Esto permite porder escribir texto luego del break
}