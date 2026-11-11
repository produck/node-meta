/** The media type this record describes. */
export const mediaType = 'application/vnd.debian.binary-package';

export const commentList = ['Debian package'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-deb', 'application/x-debian-package'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.deb',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.udeb',
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
        value: '!<arch>',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'debian',
            offset: '8',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
