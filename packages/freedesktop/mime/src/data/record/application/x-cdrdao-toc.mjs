/** The media type this record describes. */
export const mediaType = 'application/x-cdrdao-toc';

export const commentList = ['CD Table Of Contents'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.toc',
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
        value: 'CD_ROM\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'CD_DA\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'CD_ROM_XA\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'CD_TEXT ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'CATALOG "',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '"',
            offset: '22',
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
