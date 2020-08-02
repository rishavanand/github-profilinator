import React, { useState } from 'react';
import { SectionProps } from '../components/Section';
import { DEMO_SECTION_DATA } from '../config/demo';
import { FieldProps } from '../components/Field';

export interface GlobalContext {
    activeSectionId?: string;
    sections?: SectionProps[];
    changeActiveSection?: React.Dispatch<React.SetStateAction<string>>;
    addSection?: (sectionProps: SectionProps) => void;
    findSectionById?: (id: string) => SectionProps;
    modifySection?: (sectionProps: Required<Pick<SectionProps, 'id'>>) => void;
    addField?: (fieldProps: Required<Pick<FieldProps, 'id' | 'sectionId' | 'type'>>) => void;
    modifyField?: (fieldProps: Required<Pick<FieldProps, 'id' | 'sectionId'>> & FieldProps) => void;
    deleteField?: (fieldProps: Required<Pick<FieldProps, 'id' | 'sectionId'>>) => void;
}

export const globalContext = React.createContext<GlobalContext>({});

const Provider = (props: { children: React.ReactChildren }) => {
    const [activeSectionId, changeActiveSection] = useState(DEMO_SECTION_DATA[0].id);
    const [sections, modifySections] = useState(DEMO_SECTION_DATA);

    const findSectionById = (id: string) => {
        return sections.find(section => section.id === id);
    };

    const addSection = (sectionData: SectionProps) => {
        sections.push(sectionData);
        modifySections(sections);
    };

    const modifySection = (sectiondata: Required<Pick<SectionProps, 'id'>>) => {
        const updatedSections = sections.map((section, i) => {
            if (section.id === sectiondata.id)
                return {
                    ...section,
                    ...sectiondata,
                };
            else return section;
        });
        modifySections(updatedSections);
    };

    const addField = (fieldProps: Required<Pick<FieldProps, 'id' | 'sectionId' | 'type'>>) => {
        // const section = sections.find(section => section.id === fieldProps.sectionId);
        // section.fields.push(fieldProps);
        // modifySection(section);
    };

    const modifyField = (fieldProps: Required<Pick<FieldProps, 'id' | 'sectionId'>>) => {
        const section = sections.find(section => section.id === fieldProps.sectionId);
        const updatedFields = section.fields.map((field, i) => {
            if (field.id === fieldProps.id)
                return {
                    ...field,
                    ...fieldProps,
                };
            else return field;
        });
        section.fields = updatedFields;
        modifySection(section);
    };

    const deleteField = (fieldProps: Required<Pick<FieldProps, 'id' | 'sectionId'>>) => {
        const section = sections.find(section => section.id === fieldProps.sectionId);
        let updatedFields = section.fields.map((field, i) => {
            if (field.id === fieldProps.id) return undefined;
            else return field;
        });
        updatedFields = updatedFields.filter(field => field !== undefined);
        section.fields = updatedFields;
        modifySection(section);
    };

    const globalContextData: GlobalContext = {
        activeSectionId: activeSectionId,
        changeActiveSection: changeActiveSection,
        sections: sections,
        addSection: addSection,
        findSectionById: findSectionById,
        modifySection: modifySection,
        addField: addField,
        modifyField: modifyField,
        deleteField: deleteField,
    };

    return <globalContext.Provider value={globalContextData as GlobalContext}>{props.children}</globalContext.Provider>;
};

const wrapWithProvider = ({ element }: { element: React.ReactChildren }) => <Provider>{element}</Provider>;

export default wrapWithProvider;
