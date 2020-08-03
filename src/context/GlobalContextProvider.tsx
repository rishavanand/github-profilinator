import React, { useState } from 'react';
import { SectionProps } from '../components/Section';
import { DEMO_SECTION_DATA } from '../config/demo';
import { FieldProps } from '../components/Field';

export interface GlobalContext {
    activeSectionIndex?: number;
    sections?: SectionProps[];
    changeActiveSection?: React.Dispatch<React.SetStateAction<number>>;
    addSection?: (sectionProps: SectionProps) => void;
    findSectionById?: (id: string) => SectionProps;
    modifySection?: (sectionProps: Required<Pick<SectionProps, 'id'>>) => void;
    addField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'id' | 'type'>>,
        sectionIndex: number,
        columnIndex: number,
    ) => void;
    modifyField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => void;
    deleteField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => void;
}

export const globalContext = React.createContext<GlobalContext>({});

const Provider = (props: { children: React.ReactChildren }) => {
    const [activeSectionIndex, changeActiveSection] = useState(0);
    const [sections, modifySections] = useState(DEMO_SECTION_DATA);

    const addSection = (sectionData: SectionProps & Required<Pick<SectionProps, 'id'>>) => {
        sections.push(sectionData);
        modifySections(sections.map(section => section));
    };

    const addField = (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'id' | 'type'>>,
        sectionIndex: number,
        columnIndex: number,
    ) => {
        if (!sections[sectionIndex].fields) sections[sectionIndex].fields = [[]];
        sections[sectionIndex].fields[columnIndex].push(fieldProps);
        modifySections(sections.map(section => section));
    };

    const modifyField = (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => {
        const { sectionIndex, columnIndex, fieldIndex } = fieldProps;
        if (!sections[sectionIndex].fields || !sections[sectionIndex].fields.length)
            sections[sectionIndex].fields = [[]];
        sections[sectionIndex].fields[columnIndex][fieldIndex] = {
            ...sections[sectionIndex].fields[columnIndex][fieldIndex],
            ...fieldProps,
        };
        modifySections(sections.map(section => section));
    };

    const deleteField = (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => {
        const { sectionIndex, columnIndex, fieldIndex } = fieldProps;
        sections[sectionIndex].fields[columnIndex].splice(fieldIndex, 1);
        modifySections(sections.map(section => section));
    };

    const globalContextData: GlobalContext = {
        activeSectionIndex: activeSectionIndex,
        changeActiveSection: changeActiveSection,
        sections: sections,
        addSection: addSection,
        addField: addField,
        modifyField: modifyField,
        deleteField: deleteField,
    };

    return <globalContext.Provider value={globalContextData as GlobalContext}>{props.children}</globalContext.Provider>;
};

const wrapWithProvider = ({ element }: { element: React.ReactChildren }) => <Provider>{element}</Provider>;

export default wrapWithProvider;
