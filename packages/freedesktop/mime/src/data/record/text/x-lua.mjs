/** The media type this record describes. */
export const mediaType = 'text/x-lua';

export const commentList = ['Lua script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['application/x-executable', 'text/plain'];
export const globList = [
  {
    pattern: '*.lua',
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
        value: '/bin/lua',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/luajit',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/env lua',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/env luajit',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: 'function',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
