/** The media type this record describes. */
export const mediaType = 'text/x-opencl-csrc';

export const commentList = ['OpenCL C source code'];
export const acronym = 'OpenCL';
export const expandedAcronym = 'Open Computing Language';
export const genericIconName = null;
export const aliasList = ['text/x-opencl-src'];
export const subClassOfList = ['text/x-csrc'];
export const globList = [
  {
    pattern: '*.cl',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '#include ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/*',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '//',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'struct',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
