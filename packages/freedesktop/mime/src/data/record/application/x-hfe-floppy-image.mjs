/** The media type this record describes. */
export const mediaType = 'application/x-hfe-floppy-image';

export const commentList = ['HFE floppy disk image'];
export const acronym = 'HFE';
export const expandedAcronym = 'HxC Floppy Emulator';
export const genericIconName = 'application-x-executable';
export const aliasList = ['application/x-hfe-file'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.hfe',
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
        value: 'HXCPICFE',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
