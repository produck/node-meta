/** The media type this record describes. */
export const mediaType = 'model/stl';

export const commentList = ['STL 3D model'];
export const acronym = 'STL';
export const expandedAcronym = 'StereoLithography';
export const genericIconName = 'image-x-generic';
export const aliasList = ['model/x.stl-ascii', 'model/x.stl-binary'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.stl',
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
        value: 'solid',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'SOLID',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
