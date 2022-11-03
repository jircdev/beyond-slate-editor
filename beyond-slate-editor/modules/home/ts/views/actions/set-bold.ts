import { Text, Editor, Transforms } from 'slate';

const isBoldMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: node => node.bold === true,
        universal: true
    });
    return !!match;
}

export const toggleBoldMark = (editor) => {
    const isActive = isBoldMarkActive(editor);
    Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: node => Text.isText(node), split: true }
    );
}