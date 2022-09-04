import * as React from "react";
import { Option } from "./option";

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
            />

            <Option
                dataAction="link"
                name="Link"
            />
        </header>
    );
}
