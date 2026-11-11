/** The media type this record describes. */
export const mediaType = 'application/x-vdi-disk';

export const commentList = ['VDI disk image'];
export const acronym = 'VDI';
export const expandedAcronym = 'Virtual Disk Image';
export const genericIconName = null;
export const aliasList = ['application/x-virtualbox-vdi'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.vdi',
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
        value: '<<< QEMU VM Virtual Disk Image >>>\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<<< Oracle VM VirtualBox Disk Image >>>\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<<< Sun VirtualBox Disk Image >>>\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<<< Sun xVM VirtualBox Disk Image >>>\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<<< innotek VirtualBox Disk Image >>>',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<<< CloneVDI VirtualBox Disk Image >>>\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
