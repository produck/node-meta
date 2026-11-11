/** The media type this record describes. */
export const mediaType = 'text/slint';

export const commentList = ['Slint Language'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.slint',
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
        value: 'std-widgets.slint',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'export component',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
