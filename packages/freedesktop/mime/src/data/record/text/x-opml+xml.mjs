/** The media type this record describes. */
export const mediaType = 'text/x-opml+xml';

export const commentList = ['OPML syndication feed'];
export const acronym = 'OPML';
export const expandedAcronym = 'Outline Processor Markup Language';
export const genericIconName = 'text-html';
export const aliasList = ['text/x-opml'];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.opml',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 70,
    matchList: [
      {
        type: 'string',
        value: '<opml ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
