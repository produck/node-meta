/** The media type this record describes. */
export const mediaType = 'application/xml';

export const commentList = ['XML document'];
export const acronym = 'XML';
export const expandedAcronym = 'eXtensible Markup Language';
export const genericIconName = 'text-html';
export const aliasList = ['text/xml'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: '<?xml',
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
const glob0 = '*.xml';
const glob1 = '*.xbl';
const glob2 = '*.xsd';
const glob3 = '*.rng';

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
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];
