/** The media type this record describes. */
export const mediaType = 'application/vnd.framemaker';

export const commentList = ['Adobe FrameMaker document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = ['application/x-frame'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '<MakerFile',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<MIFFile',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<MakerDictionary',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<MakerScreenFon',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<MML',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<Book',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<Maker',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.fm';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
