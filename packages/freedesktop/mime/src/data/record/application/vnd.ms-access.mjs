/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-access';

export const commentList = ['JET database'];
export const acronym = 'JET';
export const expandedAcronym = 'Joint Engine Technology';
export const genericIconName = 'x-office-document';
export const aliasList = [
  'application/msaccess',
  'application/vnd.msaccess',
  'application/x-msaccess',
  'application/mdb',
  'application/x-mdb',
  'zz-application/zz-winassoc-mdb',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mdb',
    weight: 60,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\x00\\x01\\x00\\x00Standard Jet DB',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
