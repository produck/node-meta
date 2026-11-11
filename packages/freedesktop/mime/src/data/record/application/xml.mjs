/** The media type this record describes. */
export const mediaType = 'application/xml';

export const commentList = ['XML document'];
export const acronym = 'XML';
export const expandedAcronym = 'eXtensible Markup Language';
export const genericIconName = 'text-html';
export const aliasList = ['text/xml'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.xml',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xbl',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xsd',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.rng',
    weight: null,
    caseSensitive: false,
  },
];
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
