import * as React from "react";
import { Option } from "../../../../../../beyond-slate-editor/modules/home/ts/views/components/option";
import { SaveButton } from "../../../../../../beyond-slate-editor/modules/home/ts/views/components/save-button";

export 
function HeaderEditor() {

    return (
        <header>
            <Option
                dataAction="bold"
                name="Bold"
            />

            <Option
                dataAction="code"
                name="Code"
            />

            <Option
                dataAction="image"
                name="Image"
                needAFile={true}
            />

            <Option
                dataAction="link"
                name="Link"
            />

            <SaveButton />
        </header>
    );
}
