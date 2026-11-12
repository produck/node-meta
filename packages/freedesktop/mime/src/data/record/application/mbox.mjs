/** The media type this record describes. */
export const mediaType = 'application/mbox';

export const commentList = ['Mailbox file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'emblem-mail';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: 20,
    matchList: [
      {
        type: 'string',
        value: 'From ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.mbox';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
