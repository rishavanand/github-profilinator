import React, { useContext } from 'react';
import { Input, Form } from 'antd';

export const generateBlogPostMarkdown = () => {
    return `<!-- BLOG-POST-LIST:START -->  \nIf things goes well, this section should automatically be replaced by a list of your blog posts after you commit your readme file. \n<!-- BLOG-POST-LIST:END -->`;
};

export const BlogPostField = () => {
    return (
        <>
            This is a blog post field. It does not have a URL input box because the URL needs to be added to Github
            Action. After you add the generated markdown to your README, you have to enable the{' '}
            <a href="https://github.com/gautamkrishnar/blog-post-workflow" rel="noreferrer" target="_blank">
                Blog Post Workflow
            </a>{' '}
            for auto updating README.{' '}
        </>
    );
};

export default BlogPostField;
