import React, { useState } from 'react';
import { SectionProps } from '../components/Section';
import * as TEMPLATES from '../config/templates';
import { FieldProps } from '../components/Field';

export interface GlobalContext {
    activeSectionIndex?: number;
    sections?: SectionProps[];
    changeActiveSection?: React.Dispatch<React.SetStateAction<number>>;
    addSection?: (sectionProps: SectionProps) => void;
    shiftSection?: (direction: 'up' | 'down', sectionIndex: number) => void;
    resetSections?: () => void;
    useTemplate?: (templateId?: string) => void;
    deleteSection?: (sectionIndex: number) => void;
    findSectionById?: (id: string) => SectionProps;
    modifySection?: (sectionProps: SectionProps, sectionIndex: number) => void;
    addField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'type'>>,
        sectionIndex: number,
        columnIndex: number,
    ) => void;
    modifyField?: (fieldProps: FieldProps, sectionIndex: number, columnIndex: number, fieldIndex: number) => void;
    deleteField?: (sectionIndex: number, columnIndex: number, fieldIndex: number) => void;
    shiftField?: (direction: 'up' | 'down', sectionIndex: number, columnIndex: number, fieldIndex: number) => void;
    changeColumnCount?: (sectionIndex: number, columnCount: number) => void;
}

export const globalContext = React.createContext<GlobalContext>({});

const Provider = (props: { children: React.ReactChildren }) => {
    const [activeSectionIndex, changeActiveSection] = useState(0);
    const [sections, modifySections] = useState(TEMPLATES['TEMPLATE_1'] as SectionProps[]);

    const addSection = (sectionData: SectionProps) => {
        sections.push(sectionData);
        modifySections(sections.map(section => section));
    };

    const modifySection = (sectionProps: SectionProps, sectionIndex: number) => {
        sections[sectionIndex] = sectionProps;
        modifySections(sections.map(section => section));
    };

    const shiftSection = (direction: 'up' | 'down', sectionIndex: number): void => {
        if ((sectionIndex <= 0 && direction === 'up') || (sectionIndex >= sections.length - 1 && direction === 'down'))
            return;
        const section = sections.splice(sectionIndex, 1);
        if (direction === 'up') sections.splice(sectionIndex - 1, 0, ...section);
        else sections.splice(sectionIndex + 1, 0, ...section);
        modifySections(sections.map(section => section));
        if (direction === 'up') changeActiveSection(activeSectionIndex - 1);
        else changeActiveSection(activeSectionIndex + 1);
    };

    const deleteSection = (sectionIndex: number) => {
        sections.splice(sectionIndex, 1);
        modifySections(sections.map(section => section));
    };

    const resetSections = () => {
        modifySections([
            {
                name: 'Intro',
            },
        ]);
        changeActiveSection(0);
    };

    const useTemplate = (templateId?: string) => {
        modifySections(TEMPLATES[templateId]);
        changeActiveSection(0);
    };

    const addField = (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'type'>>,
        sectionIndex: number,
        columnIndex: number,
    ) => {
        if (!sections[sectionIndex].fields) sections[sectionIndex].fields = [[]];
        sections[sectionIndex].fields[columnIndex].push(fieldProps);
        modifySections(sections.map(section => section));
    };

    const modifyField = (fieldProps: FieldProps, sectionIndex: number, columnIndex: number, fieldIndex: number) => {
        if (!sections[sectionIndex].fields || !sections[sectionIndex].fields.length)
            sections[sectionIndex].fields = [[]];
        sections[sectionIndex].fields[columnIndex][fieldIndex] = {
            ...sections[sectionIndex].fields[columnIndex][fieldIndex],
            ...fieldProps,
        };
        modifySections(sections.map(section => section));
    };

    const shiftField = (direction: 'up' | 'down', sectionIndex: number, columnIndex: number, fieldIndex: number) => {
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

    const deleteField = (sectionIndex: number, columnIndex: number, fieldIndex: number) => {
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
        resetSections: resetSections,
        useTemplate: useTemplate,
        deleteSection: deleteSection,
        shiftSection: shiftSection,
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
