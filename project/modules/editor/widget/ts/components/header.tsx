import * as React from "react";
import { Option } from "./option";
import { SaveButton } from "./save-button";

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
