import { ReactEditor } from "slate-react";
import {Editor, Path, Range, Transforms, Element} from "slate";

// Just create a paragraph element.
export const createParagraphNode = (children: any[] = [{text: ""}]) => ({
    type: "paragraph",
    children
});

// Just create a link element.
export const createLinkNode = (href: string, text: string) => ({
    type: "link",
    href,
    children: [{text}]
});

// Create a link and put it in the document
export function insertLink(editor, url: string, linkName: string) {
    if (!url) return;
    const { selection } = editor;
    const link = createLinkNode(url, linkName);
    ReactEditor.focus(editor);

    // Remove the link in case is now active
    const [ selectedNode ] = Editor.fragment(editor, selection);
    if (selectedNode.type === "link") {
        removeLink(editor);
        return;
    }

    // Insert the new link after the void node
    const [parentNode, parentPath] = Editor.parent(editor, selection);
    if (editor.isVoid(parentNode)) {
        Transforms.insertNodes(editor, createParagraphNode([link]), {
            at: Path.next(parentPath),
            select: true
        });
        return;
    }
    
    // Check if there is an element selected in case it does not, add the link, otherwise replace the selected element with a link
    const previusNode = Editor.before(editor, selection);
    const theresNothingSelected = Range.isCollapsed(selection);
    if (theresNothingSelected) {
        return Transforms.insertNodes(editor, link, { select: true, at: previusNode });
    }

    // Wrap the currently selected range of text into a Link
    
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, {edge: "end"});
2
}


// Function that allow us to remove a link.
export const removeLink = (editor, opts = {}) => {
    Transforms.unwrapNodes(editor, {
        ...opts,
        match: (node) =>
            !Editor.isEditor(node) && Element.isElement(node) && node.type !== "paragraph"
    });
};