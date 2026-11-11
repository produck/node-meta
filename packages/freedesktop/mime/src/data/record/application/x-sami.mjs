/** The media type this record describes. */
export const mediaType = 'application/x-sami';

export const commentList = ['SAMI subtitles'];
export const acronym = 'SAMI';
export const expandedAcronym = 'Synchronized Accessible Media Interchange';
export const genericIconName = 'text-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.smi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.sami',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '<SAMI>',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
