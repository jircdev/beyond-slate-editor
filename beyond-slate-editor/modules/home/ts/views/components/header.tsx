import * as React from "react";
import { Option } from "./option";
import { SaveButton } from "./save-button";

export 
function HeaderEditor() {
    
    return (
        <header>
            <div className="options">
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
            </div>

            <SaveButton />
        </header>
    );
}
