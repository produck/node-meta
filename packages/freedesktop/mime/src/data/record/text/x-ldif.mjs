/** The media type this record describes. */
export const mediaType = 'text/x-ldif';

export const commentList = ['LDIF address book'];
export const acronym = 'LDIF';
export const expandedAcronym = 'LDAP Data Interchange Format';
export const genericIconName = 'x-office-address-book';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'dn: cn=',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'dn: mail=',
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
const glob0 = '*.ldif';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
