/** The media type this record describes. */
export const mediaType = 'application/x-powershell';

export const commentList = ['PowerShell script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.ps1',
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
        value: '#Requires -PSEdition Core',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#Requires -PSEdition Desktop',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
