import * as React from 'react';
import { Badge } from '../nodes/badge';
import { CodeBlock } from '../nodes/code';
import { Image } from '../nodes/image';
import { Link } from '../nodes/link';
import { Paragraph } from '../nodes/paragraph';
import { Title } from '../nodes/title';
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
        case 'h1':
            return <Title {...props} />
        case 'badge':
            return <Badge {...props} />
        default:
            return <Paragraph {...props} />
    }


}
export const onReanderLeaf = props => <Leaf {...props} />;
