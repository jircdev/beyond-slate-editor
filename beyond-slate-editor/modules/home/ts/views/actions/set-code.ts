import { Editor, Transforms } from 'slate';

export const isCodeBlockActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: node => node.type === 'code',
        universal: true
    })

    return !!match;
}

export const toggleCodeBlock = (editor) => {
    const isActive = isCodeBlockActive(editor);
    Transforms.setNodes(
        editor,
        { type: isActive ? null : 'code' },
        { match: node => Editor.isBlock(editor, node) }
    )
}