/** The media type this record describes. */
export const mediaType = 'application/yaml';

export const commentList = ['YAML document'];
export const acronym = 'YAML';
export const expandedAcronym = 'YAML Ain\'t Markup Language';
export const genericIconName = 'text-x-generic';
export const aliasList = ['application/x-yaml', 'text/yaml', 'text/x-yaml'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '%YAML',
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
const glob0 = '*.yaml';
const glob1 = '*.yml';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
