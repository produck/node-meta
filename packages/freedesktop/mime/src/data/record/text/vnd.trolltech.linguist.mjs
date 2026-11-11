/** The media type this record describes. */
export const mediaType = 'text/vnd.trolltech.linguist';

export const commentList = ['Message catalog'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-linguist', 'text/vnd.qt.linguist'];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.ts',
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
        value: '<TS ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<TS>',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
