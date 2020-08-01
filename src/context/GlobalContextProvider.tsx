import React, { useState } from 'react';

import { SECTION_TYPES } from '../config/global';
import { DEMO_SECTION_DATA } from '../config/demo';

export const globalContext = React.createContext({});

export interface SectionData {
    type: SECTION_TYPES;
    name: string;
    columnCount: number;
    id: string;
}

export interface GlobalContext {
    activeSectionId: string;
    changeActiveSection: React.Dispatch<React.SetStateAction<string>>;
    lastActiveSectionId: string;
    changeLastActiveSection: React.Dispatch<React.SetStateAction<string>>;
    sections: SectionData[];
    modifySections: React.Dispatch<React.SetStateAction<SectionData[]>>;
}

const Provider = (props: { children: React.ReactChildren }) => {
    const [activeSectionId, changeActiveSection] = useState(DEMO_SECTION_DATA[0].id);
    const [lastActiveSectionId, changeLastActiveSection] = useState();
    const [sections, modifySections] = useState(DEMO_SECTION_DATA);

    const globalContextData: GlobalContext = {
        activeSectionId: activeSectionId,
        changeActiveSection: changeActiveSection,
        lastActiveSectionId: lastActiveSectionId,
        changeLastActiveSection: changeLastActiveSection,
        sections: sections,
        modifySections: modifySections,
    };

    return <globalContext.Provider value={globalContextData as GlobalContext}>{props.children}</globalContext.Provider>;
};

const wrapWithProvider = ({ element }: { element: React.ReactChildren }) => <Provider>{element}</Provider>;

export default wrapWithProvider;
