import { v4 as uuidv4 } from 'uuid';
import { SECTION_TYPES } from "./global";

export const DEMO_SECTION_DATA: {
    type: SECTION_TYPES,
    name: string,
    columnCount: number,
    id: string
}[] = [{
    type: SECTION_TYPES.BANNER,
    name: 'Banner',
    columnCount: 1,
    id: uuidv4()
}, {
    type: SECTION_TYPES.ABOUT_ME,
    name: 'About Me',
    columnCount: 2,
    id: uuidv4()
}, {
    type: SECTION_TYPES.SKILLS,
    name: 'Skills',
    columnCount: 1,
    id: uuidv4()
}];