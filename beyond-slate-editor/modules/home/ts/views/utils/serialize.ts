import {escapeHtml} from './escape-html';
import {Text} from 'slate'

// TODO: MODIFICAR PARA QUE USE EL FORMATO JSON
export const serialize = nodes => {
    nodes = Array.isArray(nodes) ? nodes : [nodes];

    return nodes.map(node => {
        if (Text.isText(node)) {
            let string = escapeHtml(node.text)
            if (node.bold) {
                string = `<strong>${string}</strong>`;
            }
            return string;
        }

        const children = node.children.map(n => serialize(n)).join('');
        switch (node.type) {
            case 'quote':
                return `<blockquote><p>${children}</p></blockquote>`;

            case 'paragraph':
                return `<p>${children}</p>`;

            case 'link':
                return `<a href="${escapeHtml(node.href)}">${children}</a>`;

            case 'img':
                return `<img src={${node.src}} alt={} />`;

            case 'code':
                return `<pre><code>${children}</code></pre>`
                
            case 'h1': 
                return `<h1>${children}</h1>`;

            default:
                return `<p>${children}</p>`;
        }
    })
}
