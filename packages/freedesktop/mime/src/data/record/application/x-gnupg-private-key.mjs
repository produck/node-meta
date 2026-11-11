/** The media type this record describes. */
export const mediaType = 'application/x-gnupg-private-key';

export const commentList = ['GnuPG private key'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.key',
    weight: 10,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '(11:private-key(',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '(21:protected-private-key(',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '(20:shadowed-private-key(',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Key: (private-key ',
        offset: '0:1024',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Key: (protected-private-key ',
        offset: '0:1024',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Key: (shadowed-private-key ',
        offset: '0:1024',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
