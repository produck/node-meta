/** The media type this record describes. */
export const mediaType = 'application/x-spectrum-dsk';

export const commentList = ['Amstrad CPC/ZX Spectrum DSK floppy disk image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.dsk',
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
        value: 'MV - CPCEMU Disk-File\\x0d\\x0aDisk-Info\\x0d\\x0a',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'EXTENDED CPC DSK File\\x0d\\x0aDisk-Info\\x0d\\x0a',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
