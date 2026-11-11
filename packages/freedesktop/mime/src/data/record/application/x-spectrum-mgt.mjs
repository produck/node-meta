/** The media type this record describes. */
export const mediaType = 'application/x-spectrum-mgt';

export const commentList = ['ZX Spectrum/SAM Coupé MGT floppy disk image'];
export const acronym = 'MGT';
export const expandedAcronym = 'Miles Gordon Technology';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mgt',
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
        value: '\\04Sys 3a    ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\04Sys 3b    ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\04SYSTEM 3d ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\04+SYS 2a   ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
