import {CodeBlock} from "../editor-components/code";
import {Image} from "../editor-components/image";
import {Paragraph} from "../editor-components/paragraph";
import * as React from "react";
import {Leaf} from "../editor-components/leaf";
import {Link} from "../editor-components/link";

export function onRenderElement(props) {

    // console.log(400, props.element.type)
    switch (props.element.type) {
        case 'code':
            return <CodeBlock {...props} />
        case 'img':
            return <Image {...props}/>
        case 'link':
            return <Link {...props}/>
        default:
            return <Paragraph {...props} />
    }


}

export const onReanderLeaf = props => <Leaf {...props} />;
