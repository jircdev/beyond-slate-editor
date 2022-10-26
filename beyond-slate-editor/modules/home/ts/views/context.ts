import * as React from 'react';

export const EditorContext = React.createContext(null);
export const useEditorContext = () => React.useContext(EditorContext);