import {ReactEditor} from "slate-react";
import {Editor, Path, Transforms} from "slate";
import { createParagraphNode } from './add-paragraph';

const createImageNode = (alt, src) => ({
    type: "img",
    alt,
    src,
    children: [{text: ""}]
});

export function loadImage(editor, url) {
    const {selection} = editor;
    const image = createImageNode("Image", url);
    ReactEditor.focus(editor);
    

    const [, parentPath] = Editor.parent(
        editor,
        selection.focus?.path
    );

    Transforms.insertNodes(editor, image, {
        at: Path.next(parentPath),
        voids: 1
    });

    Transforms.insertNodes(editor, createParagraphNode(), { at: Path.next(), select: true });
}
