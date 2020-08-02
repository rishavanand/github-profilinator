import React, { useContext } from 'react';
import { FIELD_TYPES } from '../../config/global';
import TextField, { TextFieldData, TextFieldOptions } from './TextField';
import { Card } from 'antd';
import { globalContext } from '../../context/GlobalContextProvider';

export interface FieldProps {
    id: string;
    type: FIELD_TYPES;
    data?: TextFieldData;
    options?: TextFieldOptions;
    sectionId: string;
}

export const Field = (props: FieldProps & Required<Pick<FieldProps, 'id' | 'sectionId' | 'type'>>) => {
    const context = useContext(globalContext);

    if (props.type === FIELD_TYPES.TEXT)
        return (
            <Card style={{ marginBottom: 20 }}>
                <TextField
                    {...props}
                    sectionId={props.sectionId}
                    deleteField={context.deleteField}
                    modifyField={context.modifyField}
                />
            </Card>
        );
    else return <>Invalid field type</>;
};

export default Field;
