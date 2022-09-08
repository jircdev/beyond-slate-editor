// Just create a paragraph element.
export const createParagraphNode = (children: any[] = [{text: " "}]) => ({
    type: "paragraph",
    children
});