/** The media type this record describes. */
export const mediaType = 'application/x-ksysv-package';

export const commentList = ['KSysV init package'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'KSysV',
        offset: '4',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '1',
            offset: '15',
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
