/** The media type this record describes. */
export const mediaType = 'application/x-ruby';

export const commentList = ['Ruby script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = ['text/x-ruby'];
export const subClassOfList = ['application/x-executable', 'text/plain'];
export const globList = [
  {
    pattern: '*.rb',
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
        value: '/bin/env ruby',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/ruby',
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
        value: 'class',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'def',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'module',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
