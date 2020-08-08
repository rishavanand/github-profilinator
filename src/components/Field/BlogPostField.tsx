import React, { useContext } from 'react';
import { Input, Form } from 'antd';
import { FieldProps } from '.';
import { globalContext } from '../../context/GlobalContextProvider';

export interface ImageFieldData {
    url?: string;
}

export interface BlogPostFieldProps extends FieldProps {
    id?: string;
    data?: ImageFieldData;
}

export const generateBlogPostMarkdown = ({ data }: BlogPostFieldProps) => {
    if (!data || !data.url) return '';
    else
        return `<!-- BLOG-POST-LIST:START --> If things goes well, this section should automatically be replaced by a list of your blog posts after you commit your readme file. \n<!-- BLOG-POST-LIST:END -->`;
};

export const BlogPostField = (
    blogFieldProps: BlogPostFieldProps &
        Required<Pick<BlogPostFieldProps, 'sectionIndex' | 'columnIndex' | 'fieldIndex'>>,
) => {
    const { modifyField } = useContext(globalContext);

    const localImageFieldProps: typeof blogFieldProps = {
        options: {},
        data: {},
        ...blogFieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        modifyField({
            ...localImageFieldProps,
            data: {
                ...localImageFieldProps.data,
                url: value,
            },
        });
    };

    return (
        <>
            <Form layout="vertical">
                <Form.Item label="Blog url">
                    <Input name="url" value={localImageFieldProps.data.url} onChange={onChange} />
                </Form.Item>
            </Form>
        </>
    );
};

export default BlogPostField;
