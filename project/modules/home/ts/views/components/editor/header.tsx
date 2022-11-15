import * as React from "react";
import { Option } from "./option";

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

                <Option
                    dataAction="title"
                    name="h1"
                />

                <Option
                    dataAction="badge"
                    name="Badge"
                />
            </div>
        </header>
    );
}