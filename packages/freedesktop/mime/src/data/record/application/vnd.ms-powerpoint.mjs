/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-powerpoint';

export const commentList = ['PowerPoint presentation'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-presentation';
export const aliasList = [
  'application/powerpoint',
  'application/mspowerpoint',
  'application/x-mspowerpoint',
];
export const subClassOfList = ['application/x-ole-storage'];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '\\xd0\\xcf\\x11\\xe0\\xa1\\xb1\\x1a\\xe1',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value:
              '\\x10\\x8d\\x81\\x64\\x9b\\x4f\\xcf\\x11\\x86\\xea\\x00\\xaa\\x00\\xb9\\x29\\xe8',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\x70\\xae\\x7b\\xea\\x3b\\xfb\\xcd\\x11\\xa9\\x03\\x00\\xaa\\x00\\x51\\x0e\\xa3',
            offset: '592:8192',
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

/** About glob */
const glob0 = '*.ppz';
const glob1 = '*.ppt';
const glob2 = '*.pps';
const glob3 = '*.pot';

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
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];
