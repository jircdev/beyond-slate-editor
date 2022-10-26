import {escapeHtml} from '../../../../../../beyond-slate-editor/modules/home/ts/views/utils/escape-html';
import {Text} from 'slate'

export const formater = nodes => {

    nodes = Array.isArray(nodes) ? nodes : [nodes];

    return nodes.map(node => {

        const children = node.children.map(n => formater(n)).join('');
        switch (node.type) {
            case 'quote':
                return `"q": ${children}`;

            case 'paragraph':
                return `"p": ${children}`;

            case 'link':
                return `l: [
                    ${escapeHtml(node.href)},
                    ${children}
                ]`;

            case 'img':
                return `<img src={${node.src}} alt={} />`;

            case 'code':
                return `"c": ${children}`
                
            default:
                return children;
        }
    })
}
