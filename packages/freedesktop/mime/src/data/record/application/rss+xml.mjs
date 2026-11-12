/** The media type this record describes. */
export const mediaType = 'application/rss+xml';

export const commentList = ['RSS summary'];
export const acronym = 'RSS';
export const expandedAcronym = 'RDF Site Summary';
export const genericIconName = 'text-html';
export const aliasList = ['text/rss'];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: 70,
    matchList: [
      {
        type: 'string',
        value: '<rss ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<RSS ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.rss';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
