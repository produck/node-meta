/** The media type this record describes. */
export const mediaType = 'text/vnd.sun.j2me.app-descriptor';

export const commentList = ['JAD document'];
export const acronym = 'JAD';
export const expandedAcronym = 'Java Application Descriptor';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.jad',
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
        value: 'MIDlet-',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
