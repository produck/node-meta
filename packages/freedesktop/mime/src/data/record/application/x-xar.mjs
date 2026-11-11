/** The media type this record describes. */
export const mediaType = 'application/x-xar';

export const commentList = ['XAR archive'];
export const acronym = 'XAR';
export const expandedAcronym = 'eXtensible ARchive';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.xar',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pkg',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'big32',
        value: '0x78617221',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
