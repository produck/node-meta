/** The media type this record describes. */
export const mediaType = 'application/x-bat';

export const commentList = ['DOS/Windows batch file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [
  'application/bat',
  'application/x-msdos-program',
  'text/x-msdos-batch',
];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '@',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'ECHO OFF',
            offset: '1',
            mask: '0x5f5f5f5fff5f5f5f',
            matchList: [],
          },
          {
            type: 'string',
            value: ' ECHO OFF',
            offset: '1',
            mask: '0xff5f5f5f5fff5f5f5f',
            matchList: [],
          },
          {
            type: 'string',
            value: 'REM',
            offset: '1',
            mask: '0x5f5f5',
            matchList: [],
          },
          {
            type: 'string',
            value: 'SET ',
            offset: '1',
            mask: '0x5f5f5ff',
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.bat';
const glob1 = '*.cmd';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
