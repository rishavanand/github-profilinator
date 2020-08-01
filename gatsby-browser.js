/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'antd/dist/antd.css';
import './src/styles/global.scss';

import Provider from './src/context/GlobalContextProvider';

export const wrapRootElement = Provider;