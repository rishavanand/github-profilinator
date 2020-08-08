import React, { useState } from 'react';
import { SectionProps } from '../components/Section';
import { DEMO_SECTION_DATA } from '../config/demo';
import { FieldProps } from '../components/Field';

export interface GlobalContext {
    activeSectionIndex?: number;
    sections?: Array<SectionProps & Required<Pick<SectionProps, 'sectionIndex'>>>;
    changeActiveSection?: React.Dispatch<React.SetStateAction<number>>;
    addSection?: (sectionProps: SectionProps) => void;
    findSectionById?: (id: string) => SectionProps;
    modifySection?: (sectionProps: SectionProps & Required<Pick<SectionProps, 'sectionIndex'>>) => void;
    addField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'id' | 'type' | 'sectionIndex' | 'columnIndex'>>,
    ) => void;
    modifyField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => void;
    deleteField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => void;
    shiftField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
        location: 'up' | 'down',
    ) => void;
    changeColumnCount?: (sectionIndex: number, columnCount: number) => void;
}

export const globalContext = React.createContext<GlobalContext>({});

const Provider = (props: { children: React.ReactChildren }) => {
    const [activeSectionIndex, changeActiveSection] = useState(0);
    const [sections, modifySections] = useState(DEMO_SECTION_DATA);

    const addSection = (sectionData: SectionProps & Required<Pick<SectionProps, 'sectionIndex'>>) => {
        sections.push(sectionData);
        modifySections(sections.map(section => section));
    };

    const modifySection = (sectionProps: SectionProps & Required<Pick<SectionProps, 'sectionIndex'>>) => {
        const { sectionIndex } = sectionProps;
        sections[sectionIndex] = sectionProps;
        modifySections(sections.map(section => section));
    };

    const addField = (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'id' | 'type' | 'sectionIndex' | 'columnIndex'>>,
    ) => {
        const { sectionIndex, columnIndex } = fieldProps;
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

    const shiftField = (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
        direction: 'up' | 'down',
    ) => {
        const { sectionIndex, columnIndex, fieldIndex } = fieldProps;
        if (
            (fieldIndex <= 0 && direction === 'up') ||
            (fieldIndex >= sections[sectionIndex].fields[columnIndex].length - 1 && direction === 'down')
        )
            return;
        const field = sections[sectionIndex].fields[columnIndex].splice(fieldIndex, 1);
        if (direction === 'up') sections[sectionIndex].fields[columnIndex].splice(fieldIndex - 1, 0, ...field);
        else sections[sectionIndex].fields[columnIndex].splice(fieldIndex + 1, 0, ...field);
        modifySections(sections.map(section => section));
    };

    const deleteField = (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => {
        const { sectionIndex, columnIndex, fieldIndex } = fieldProps;
        sections[sectionIndex].fields[columnIndex].splice(fieldIndex, 1);
        modifySections(sections.map(section => section));
    };

    const changeColumnCount = (sectionIndex: number, columnCount: number) => {
        if (!sections[sectionIndex].fields) sections[sectionIndex].fields = [[]];
        const currentColumnCount = sections[sectionIndex].fields.length;
        if (columnCount < currentColumnCount)
            // Remove last column
            new Array(currentColumnCount - columnCount).fill(1).map(() => sections[sectionIndex].fields.pop());
        else if (columnCount > currentColumnCount)
            // Add empty section
            new Array(columnCount - currentColumnCount).fill(1).map(() => sections[sectionIndex].fields.push([]));
        modifySections(sections.map(section => section));
    };

    const globalContextData: GlobalContext = {
        activeSectionIndex: activeSectionIndex,
        changeActiveSection: changeActiveSection,
        sections: sections,
        addSection: addSection,
        modifySection: modifySection,
        addField: addField,
        modifyField: modifyField,
        deleteField: deleteField,
        shiftField: shiftField,
        changeColumnCount: changeColumnCount,
    };

    return <globalContext.Provider value={globalContextData as GlobalContext}>{props.children}</globalContext.Provider>;
};

const wrapWithProvider = ({ element }: { element: React.ReactChildren }) => <Provider>{element}</Provider>;

export default wrapWithProvider;
