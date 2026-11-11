/** The media type this record describes. */
export const mediaType = 'application/x-git-bundle';

export const commentList = ['Git bundle'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.bundle',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gitbundle',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.bdl',
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
        value: '# v2 git bundle\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '# v3 git bundle\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
