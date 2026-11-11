/** The media type this record describes. */
export const mediaType = 'text/x-dbus-service';

export const commentList = ['D-Bus service file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.service',
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
        value: '\\n[D-BUS Service]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[D-BUS Service]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
