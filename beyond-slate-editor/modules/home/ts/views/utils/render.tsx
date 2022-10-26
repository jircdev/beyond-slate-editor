import * as React from 'react';
import { CodeBlock } from '../nodes/code';
import { Image } from '../nodes/image';
import { Link } from '../nodes/link';
import { Paragraph } from '../nodes/paragraph';
import {Leaf} from "./leaf";

export function onRenderElement(props) {

    // console.log(400, props.element.type)
    switch (props.element.type) {
        case 'code':
            return <CodeBlock {...props} />
        case 'img':
            return <Image {...props}/>
        case 'link':
            return <Link {...props}/>
        case 'br':
            return <br />;
        default:
            return <Paragraph {...props} />
    }


}
export const onReanderLeaf = props => <Leaf {...props} />;
