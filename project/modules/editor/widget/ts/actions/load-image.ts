import {ReactEditor} from "slate-react";
import {Editor, Path, Transforms} from "slate";
import { createParagraphNode } from './add-paragraph';

const createImageNode = (alt, src) => ({
    type: "img",
    alt,
    src,
    children: [{text: ""}]
});

export function loadImage(editor, src) {
    const {selection} = editor;
    const image = createImageNode("Image", src);
    ReactEditor.focus(editor);
    
    const [, parentPath] = Editor.parent(
        editor,
        selection.focus?.path
    );

    Transforms.insertNodes(editor, image, {
        at: Path.next(parentPath)
    });

    const imageLocation = Editor.end(editor, Path.next(parentPath));

    Transforms.insertNodes(editor, createParagraphNode(), { at: imageLocation, select: true });
}
