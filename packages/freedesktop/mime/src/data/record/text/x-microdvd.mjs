/** The media type this record describes. */
export const mediaType = 'text/x-microdvd';

export const commentList = ['MicroDVD subtitles'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.sub',
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
        value: '{1}',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '{0}',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '}{',
        offset: '0:6',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
