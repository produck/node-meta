/** The media type this record describes. */
export const mediaType = 'application/x-apple-systemprofiler+xml';

export const commentList = ['Apple System Profiler'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.spx',
    weight: 40,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '<plist version="1.0"',
        offset: '0:256',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '<key>_SPCommandLineArguments</key>',
            offset: '34:384',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [
  {
    type: null,
    namespaceURI: 'http://www.apple.com/DTDs/PropertyList-1.0.dtd',
    localName: 'plist',
  },
];
