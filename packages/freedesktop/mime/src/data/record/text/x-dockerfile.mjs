/** The media type this record describes. */
export const mediaType = 'text/x-dockerfile';

export const commentList = ['Docker container build file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: 'Dockerfile',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.Dockerfile',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: 'Dockerfile.*',
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
        value: '# syntax=docker/dockerfile:',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
