/** The media type this record describes. */
export const mediaType = 'video/3gpp2';

export const commentList = ['3GPP2 multimedia file'];
export const acronym = '3GPP2';
export const expandedAcronym = '3rd Generation Partnership Project 2';
export const genericIconName = null;
export const aliasList = ['audio/3gpp2'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.3g2',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.3gp2',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.3gpp2',
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
        value: 'ftyp3g2',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
