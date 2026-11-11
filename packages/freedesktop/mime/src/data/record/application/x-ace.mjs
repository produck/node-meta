/** The media type this record describes. */
export const mediaType = 'application/x-ace';

export const commentList = ['ACE archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.ace',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '**ACE**',
        offset: '7',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
